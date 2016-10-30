import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import About from './modules/About';
import Question from './modules/Question';
import App from './modules/App';
const element = <App />;


ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      {/* add the routes here */}
      <Route path="/question/:number" component={Question}/>
      <Route path="/about" component={About}/>
    </Route>
  </Router>
  ), document.getElementById('root')
);