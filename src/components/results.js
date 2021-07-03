import React, { useEffect, useState } from 'react';
import Result from './result';

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
        <>
          <button onClick={() => setCurrPage(currPage - 1)} type="button">Back</button>
          <button onClick={() => setCurrPage(currPage + 1)} type="button">Next</button>
        </>
      );
    }
    if (back) return <button onClick={() => setCurrPage(currPage - 1)} type="button">Back</button>;
    if (next) return <button onClick={() => setCurrPage(currPage + 1)} type="button">Next</button>;
    return <></>;
  };

  return (
    <div className="results">
      {numResults()}
      {navButtons()}
      <div>
        {currResults.map((result) => {
          return (
            <Result key={result['Track ID']} result={result} />
          );
        })}
      </div>
      {navButtons()}
    </div>
  );
};

export default Results;
