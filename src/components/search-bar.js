import React, { useState } from 'react';
import { withRouter } from 'react-router';

function SearchBar(props) {
  const [songName, setSongName] = useState('');
  const [artist, setArtist] = useState('');
  const [genre, setGenre] = useState('');
  const [year, setYear] = useState('');
  const [album, setAlbum] = useState('');

  const doSearch = () => {
    let query = '';
    if (songName) {
      for (const word of songName.split(' ')) {
        query += `+Name:${word} `;
      }
    }
    if (artist) {
      for (const word of artist.split(' ')) {
        query += `+Artist:${word} `;
      }
    }
    if (genre) {
      for (const word of genre.split(' ')) {
        query += `+Genre:${word} `;
      }
    }
    if (album) {
      for (const word of album.split(' ')) {
        query += `+Album:${word} `;
      }
    }
    if (year) {
      for (const word of year.split(' ')) {
        query += `+Year:${word} `;
      }
    }
    props.searchFor(query);
  };

  return (
    <div className="search-bar">
      <input onChange={(e) => setSongName(e.target.value)} value={songName} placeholder="Song name" />
      <input onChange={(e) => setArtist(e.target.value)} value={artist} placeholder="Artist" />
      <input onChange={(e) => setGenre(e.target.value)} value={genre} placeholder="Genre" />
      <input onChange={(e) => setAlbum(e.target.value)} value={album} placeholder="Album" />
      <input onChange={(e) => setYear(e.target.value)} value={year} placeholder="Year" />
      <button onClick={doSearch} type="button">Search</button>
    </div>
  );
}

export default withRouter(SearchBar);
