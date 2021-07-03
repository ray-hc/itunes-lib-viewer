/* eslint-disable guard-for-in */
import React from 'react';

const Result = (props) => {
  const {
    Name, Artist, Year, Genre, Album,
  } = props.result;
  return (
    <div>
      <h1>{Name}</h1>
      <h2>{Artist}</h2>
      <h3>{Album}</h3>
      <h3>{Year}</h3>
      <h3>{Genre}</h3>
    </div>

  );
};

export default Result;
