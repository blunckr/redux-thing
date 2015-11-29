import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import App from './components/App.jsx';
import todoApp from './reducers';

// pass in and subscribe to states here
var store = createStore(todoApp);

var rootElement = document.getElementById('app');

render(
  <App store={store} />,
  rootElement
);
