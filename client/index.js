import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import guessApp from './reducers/index.js';
import App from './components/app.js';

let store = createStore(guessApp);

const element = <Provider store={store}><App /></Provider>;

ReactDOM.render(
  element,
  document.getElementById('root')
);