import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import guessApp from './reducers/index.js';
import App from './components/app.js';

let store = createStore(
  guessApp,
  applyMiddleware(thunkMiddleware)
);

const element = <Provider store={store}><App /></Provider>;

ReactDOM.render(
  element,
  document.getElementById('root')
);