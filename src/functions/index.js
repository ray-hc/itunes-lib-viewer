import lunr from 'lunr';

/** ********** loadLib() **************** */
/*
 * INPUT: iTunes library in JSON format
 * (converted using plist-to-json npm module, assumes correct format)
 *
 * OUTPUT: Objects containing each track, the counts for songs per decade and genre,
 * and a searchable index of tracks.
 */

const loadLib = (itunesLib) => {
  // Create songs list
  const tracks = {};
  const genres = {};
  const decades = {};

  // For each track in the json-ified iTunes library,
  // Add to our tracks object, and increment decade, genre count.
  for (const track in itunesLib[0].Tracks) {
    if ({}.hasOwnProperty.call(itunesLib[0].Tracks, track)) {
      const trackInfo = {
        'Track ID': itunesLib[0].Tracks[track]['Track ID'],
        Name: itunesLib[0].Tracks[track].Name,
        Artist: itunesLib[0].Tracks[track].Artist,
        Album: itunesLib[0].Tracks[track].Album,
        Genre: itunesLib[0].Tracks[track].Genre,
        Year: itunesLib[0].Tracks[track].Year,
        'Play Count': itunesLib[0].Tracks[track]['Play Count'],
      };
      tracks[track] = trackInfo;

      const genre = trackInfo.Genre || 'Unknown';
      if (genre in genres) {
        genres[genre] += 1;
      } else {
        genres[genre] = 1;
      }

      const decade = trackInfo.Year ? `${Math.floor(trackInfo.Year / 10) * 10}s` : 'Unknown'; // Convert year to decade.
      if (decade in decades) {
        decades[decade] += 1;
      } else {
        decades[decade] = 1;
      }
    }
  }

  // Build index using Lunr.js
  const idx = lunr((config) => {
    config.ref('Track ID');
    config.field('Name');
    config.field('Artist');
    config.field('Album');
    config.field('Genre');
    config.field('Year');

    for (const track in tracks) {
      if ({}.hasOwnProperty.call(tracks, track)) {
        config.add(tracks[track]);
      }
    }
  });

  return ({
    idx, tracks, genres, decades,
  });
};

export default loadLib;
