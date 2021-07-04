import React, { useEffect, useState } from 'react';

const Results = (props) => {
  const [currPage, setCurrPage] = useState(1);
  useEffect(
    () => setCurrPage(1),
    [props.results],
  );

  const firstResult = currPage * 100 - 99;
  const lastResult = Math.min(currPage * 100, props.results.length);
  const currResults = props.results.slice(firstResult - 1, lastResult);

  const numResults = () => {
    if (props.results.length === 0) return '';
    return (`There are ${props.results.length} results. Showing result ${firstResult} to ${lastResult}.`);
  };

  const navButtons = () => {
    let back = false;
    let next = false;
    if (lastResult < props.results.length) next = true;
    if (firstResult > 1) back = true;
    if (back && next) {
      return (
        <div>
          <button onClick={() => setCurrPage(currPage - 1)} type="button">Back</button>
          <button onClick={() => setCurrPage(currPage + 1)} type="button">Next</button>
        </div>
      );
    }
    if (back) return <div><button onClick={() => setCurrPage(currPage - 1)} type="button">Back</button></div>;
    if (next) return <div><button onClick={() => setCurrPage(currPage + 1)} type="button">Next</button></div>;
    return <></>;
  };

  return (
    <div className="results">
      {numResults()}
      {navButtons()}
      <div>
        <table id="results">
          <thead>
            <tr>
              <th>Song <span className="emoji">🎼</span></th>
              <th>Artist <span className="emoji">👩‍🎤</span></th>
              <th>Album <span className="emoji">💽</span></th>
              <th>Genre <span className="emoji">🎷</span></th>
              <th>Year <span className="emoji">🗓</span></th>
              <th>Plays <span className="emoji">🎙</span></th>
            </tr>
          </thead>
          <tbody>
            {currResults.map((result) => {
              const {
                Name, Artist, Year, Genre, Album,
              } = result;
              return (
                <tr key={result['Track ID']}>
                  <td>{ Name }</td>
                  <td>{ Artist }</td>
                  <td>{ Album }</td>
                  <td>{ Genre }</td>
                  <td>{ Year }</td>
                  <td>{ result['Play Count'] }</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {navButtons()}
    </div>
  );
};

export default Results;
