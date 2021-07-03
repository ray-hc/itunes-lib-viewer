/* eslint-disable func-names */
/* eslint-disable guard-for-in */
import lunr from 'lunr';

const loadSearch = (itunesLib) => {
  // Create songs list
  const tracks = {};

  for (const track in itunesLib[0].Tracks) {
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
  }

  const idx = lunr(function () {
    this.ref('Track ID');
    this.field('Name');
    this.field('Artist');
    this.field('Album');
    this.field('Genre');
    this.field('Year');

    for (const track in tracks) {
      this.add(tracks[track]);
    }
  });

  return ({ idx, tracks });
};

export default loadSearch;
