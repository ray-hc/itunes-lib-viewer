/* eslint-disable react/no-this-in-sfc */
/* eslint-disable func-names */
/* eslint-disable guard-for-in */
import React, { useEffect, useState } from 'react';
import SearchBar from './search-bar';
import Results from './results';
import loadSearch from '../functions';

const Home = (props) => {
  const [results, setResults] = useState([]);
  const [tracks, setTracks] = useState({});
  const [idx, setIdx] = useState({});

  useEffect(
    () => {
      fetch('../../itunes.json')
        .then((response) => response.json())
        .then((json) => {
          const data = loadSearch(json);
          setTracks(data.tracks);
          setIdx(data.idx);
        });
    }, [],
  );

  const searchFor = (query) => {
    const newRes = [];
    for (const queryMatch of idx.search(query)) {
      newRes.push(tracks[queryMatch.ref]);
    }
    console.log(newRes);
    setResults(newRes);
  };

  return (
    <div>
      <SearchBar searchFor={searchFor} />
      <Results results={results} />
    </div>

  );
};

export default Home;
