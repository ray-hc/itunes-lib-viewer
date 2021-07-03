import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';

function SearchBar(props) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (props.match.params.query) setQuery(props.match.params.query);
  }, []);

  const keyUp = (e) => {
    if (e.key === 'Enter') {
      props.searchFor(query);
    }
  };

  return (
    <div className="search-bar">
      <input onKeyUp={keyUp} onChange={(e) => setQuery(e.target.value)} value={query} placeholder="Search library..." />
    </div>
  );
}

export default withRouter(SearchBar);
