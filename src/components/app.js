/* eslint-disable react/no-this-in-sfc */
/* eslint-disable func-names */
/* eslint-disable guard-for-in */
import '../style.scss';

import React, { useEffect, useState } from 'react';
import SearchBar from './search-bar';
import Results from './results';
import loadLib from '../functions';
import LibVisualizer from './visualize';

const App = (props) => {
  const [results, setResults] = useState([]);
  const [tracks, setTracks] = useState({});
  const [idx, setIdx] = useState({});
  const [genres, setGenres] = useState({});
  const [decades, setDecades] = useState({});
  const [onSearch, setOnSearch] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(
    () => {
      fetch('../../itunes.json')
        .then((response) => response.json())
        .then((json) => {
          const data = loadLib(json);
          setTracks(data.tracks);
          setIdx(data.idx);
          setGenres(data.genres);
          setDecades(data.decades);
          setLoading(false);
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

  const showPage = () => {
    if (loading) return <>Loading</>;
    return (
      <>
        <button onClick={() => setOnSearch(!onSearch)} type="button">{onSearch ? 'See Library Stats' : 'Back to Search'}</button>
        {onSearch
          ? (
            <>
              <SearchBar searchFor={searchFor} />
              <Results results={results} />
            </>
          )
          : <LibVisualizer genres={genres} decades={decades} />}
      </>
    );
  };

  return (
    <div>
      {showPage()}
    </div>
  );
};

export default App;
