/* eslint-disable guard-for-in */
import * as JsSearch from 'js-search';

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

const searchFor = (query) => {
  console.log(`results for: ${query}`);
  const results = searchObj.search(query);
  console.log(results);
  return (results);
};

export default searchFor;
