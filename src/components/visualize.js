/* eslint-disable guard-for-in */
import React, { useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import ReactTooltip from 'react-tooltip';

const COLORS = ['#edb76f', '#ed746f', '#6fedd2', '#e5ed6f', '#6fed87', '#6fd0ed', '#916fed', '#ed6feb', '#cc95ba', '#d0e7f5', '#b89cb2', '#5bc763'];

const LibVisualizer = (props) => {
  const [hoveredDec, setHoveredDec] = useState(null);
  const [hoveredGen, setHoveredGen] = useState(null);

  const genreData = [];
  const decadeData = [];

  if (props.genres) {
    let count = 1;
    for (const genre in props.genres) {
      genreData.push({
        title: genre,
        value: props.genres[genre],
        color: COLORS[count % (COLORS.length - 1)],
      });
      count += 1;
    }
  }
  if (props.decades) {
    let count = 1;
    for (const decade in props.decades) {
      decadeData.push({
        title: decade,
        value: props.decades[decade],
        color: COLORS[count % (COLORS.length - 1)],
      });
      count += 1;
    }
  }

  genreData.sort((a, b) => { return b.value - a.value; });
  decadeData.sort((a, b) => { return b.value - a.value; });

  for (let i = 0; i < genreData.length; i += 1) {
    genreData[i].color = COLORS[i % (COLORS.length - 1)];
  }
  for (let i = 0; i < decadeData.length; i += 1) {
    decadeData[i].color = COLORS[i % (COLORS.length - 1)];
  }

  const tables = () => {
    return (
      <div className="tables">
        <table id="genre-table">
          <thead>
            <tr>
              <th>Genre <span className="emoji">🎷</span></th>
              <th>Songs <span className="emoji">📈</span></th>
            </tr>
          </thead>
          <tbody>
            {genreData.map((genre) => {
              return (
                <tr key={genre.title}>
                  <td>{ genre.title }</td>
                  <td>{ genre.value }</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <table id="decade-table">
          <thead>
            <tr>
              <th>Decade <span className="emoji">⏳</span></th>
              <th>Songs <span className="emoji">📈</span></th>
            </tr>
          </thead>
          <tbody>
            {decadeData.map((decade) => {
              return (
                <tr key={decade.title}>
                  <td>{ decade.title }</td>
                  <td>{ decade.value }</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <>
      <h1>Library Stats</h1>
      <div className="pie-charts">
        <div data-tip="" data-for="genre-chart">
          <h2>By genre:</h2>
          <PieChart
            className="pie-chart"
            data={genreData}
            labelPosition={112}
            radius={50}
            onMouseOver={(_, index) => {
              setHoveredGen(index);
            }}
            onMouseOut={() => {
              setHoveredGen(null);
            }}
          />
          <ReactTooltip
            id="genre-chart"
            getContent={() => (typeof hoveredGen === 'number' ? `${genreData[hoveredGen].title}: ${genreData[hoveredGen].value} song(s)` : null)}
          />
        </div>
        <div data-tip="" data-for="decade-chart">
          <h2>By decade:</h2>
          <PieChart
            className="pie-chart"
            data={decadeData}
            labelPosition={112}
            radius={50}
            onMouseOver={(_, index) => {
              setHoveredDec(index);
            }}
            onMouseOut={() => {
              setHoveredDec(null);
            }}
          />
          <ReactTooltip
            id="decade-chart"
            getContent={() => (typeof hoveredDec === 'number' ? `${decadeData[hoveredDec].title}: ${decadeData[hoveredDec].value} song(s)` : null)}
          />
        </div>
      </div>
      <div className="tables">
        {tables()}
      </div>
    </>
  );
};

export default LibVisualizer;
