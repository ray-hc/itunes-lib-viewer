import React from 'react';
import Result from './result';

const Results = (props) => {
  const numResults = () => {
    return (`There are ${props.results.length} results.`);
  };

  return (
    <div className="results">
      {numResults()}
      <div>
        {props.results.map((result) => {
          return (
            <Result key={result['Track ID']} result={result} />
          );
        })}
      </div>
    </div>
  );
};

export default Results;
