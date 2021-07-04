import React, { useState } from 'react';
import LogicPicker from './logic-picker';

function SearchBar(props) {
  const [songName, setSongName] = useState('');
  const [artist, setArtist] = useState('');
  const [genre, setGenre] = useState('');
  const [year, setYear] = useState('');
  const [album, setAlbum] = useState('');

  const [songNameOp, setSongNameOp] = useState('');
  const [artistOp, setArtistOp] = useState('');
  const [genreOp, setGenreOp] = useState('');
  const [yearOp, setYearOp] = useState('');
  const [albumOp, setAlbumOp] = useState('');

  const doSearch = () => {
    let query = '';
    if (songName) {
      for (const word of songName.split(' ')) {
        query += `${songNameOp}Name:${word} `;
      }
    }
    if (artist) {
      for (const word of artist.split(' ')) {
        query += `${artistOp}Artist:${word} `;
      }
    }
    if (genre) {
      for (const word of genre.split(' ')) {
        query += `${genreOp}Genre:${word} `;
      }
    }
    if (album) {
      for (const word of album.split(' ')) {
        query += `${albumOp}Album:${word} `;
      }
    }
    if (year) {
      for (const word of year.split(' ')) {
        query += `${yearOp}Year:${word} `;
      }
    }
    console.log(query);
    props.searchFor(query);
  };

  return (
    <>
      <h1>Search</h1>
      <div className="search-bar">
        <div>
          <LogicPicker setter={setSongNameOp} field="song" op={songNameOp} />
          <input onChange={(e) => setSongName(e.target.value)} value={songName} placeholder="Song name" type="text" />
        </div>
        <div>
          <LogicPicker setter={setArtistOp} field="artist" op={artistOp} />
          <input onChange={(e) => setArtist(e.target.value)} value={artist} placeholder="Artist" type="text" />
        </div>
        <div>
          <LogicPicker setter={setAlbumOp} field="album" op={albumOp} />
          <input onChange={(e) => setAlbum(e.target.value)} value={album} placeholder="Album" type="text" />
        </div>
        <div>
          <LogicPicker setter={setGenreOp} field="genre" op={genreOp} />
          <input onChange={(e) => setGenre(e.target.value)} value={genre} placeholder="Genre" type="text" />
        </div>
        <div>
          <LogicPicker setter={setYearOp} field="year" op={yearOp} />
          <input onChange={(e) => setYear(e.target.value)} value={year} placeholder="Year" type="text" />
        </div>
        <button onClick={doSearch} type="button" className="round" aria-label="search"><i className="fas fa-search" /></button>
      </div>
      <p className="right-align small">default: result may match *any* field/word.<br />✅ = must match.<br />🚫 = cannot match.</p>
    </>
  );
}

export default SearchBar;
