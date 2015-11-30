import React from 'react';
import { render } from 'react-dom';
import { createStore, compose } from 'redux';

import Actions from './actions';
import todoApp from './store';
import App from './components/App.jsx';

import { devTools, persistState } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';


// DEVTOOLS
var store;
var devComponents;
if(!DEV_TOOLS) {
  // pass in and subscribe to states here
  store = createStore(todoApp);
} else {
  var finalCreateStore = compose(
    // Enables your middleware:
    // applyMiddleware(m1, m2, m3), // any Redux middleware, e.g. redux-thunk
    // Provides support for DevTools:
    devTools(),
    // Lets you write ?debug_session=<name> in address bar to persist debug sessions
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
  )(createStore);

  store = finalCreateStore(todoApp);
  devComponents =
    <DebugPanel top right bottom>
      <DevTools store={store} monitor={LogMonitor} />
    </DebugPanel>;
}

var storedState = localStorage.App;
if (storedState){
  store.dispatch(Actions.loadState(JSON.parse(storedState)));
}

store.subscribe(()=>{
  localStorage.App = JSON.stringify(store.getState());
});

var rootElement = document.getElementById('app');
render(
  <div>
    <App store={store} />
    {devComponents}
  </div>,
  rootElement
);
