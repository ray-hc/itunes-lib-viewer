/* eslint-disable guard-for-in */
import React from 'react';

const Result = (props) => {
  const { Name, Artist } = props.result;
  return (
    <div>
      <h1>{Name}</h1>
      <h2>{Artist}</h2>
    </div>

  );
};

export default Result;
