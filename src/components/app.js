import '../style.scss';

import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import Home from './home';
import FallBack from './fallback';
import Nav from './nav';

const App = (props) => {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search/:query" component={Home} />
          <Route component={FallBack} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
