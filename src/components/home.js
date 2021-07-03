/* eslint-disable guard-for-in */
import React, { useState } from 'react';
import * as JsSearch from 'js-search';
import SearchBar from './search-bar';
import Results from './results';

const data = require('../../itunes.json');

// Create songs list
const tracks = [];
for (const track in data[0].Tracks) {
  tracks.push(data[0].Tracks[track]);
}

// Create indices
const searchObj = new JsSearch.Search('Track ID');
searchObj.addIndex('Artist');
searchObj.addDocuments(tracks);

const Home = (props) => {
  const [results, setResults] = useState([]);

  const searchFor = (query) => {
    setResults(searchObj.search(query));
  };

  return (
    <div>
      <SearchBar searchFor={searchFor} />
      <Results results={results} />
    </div>

  );
};

export default Home;
