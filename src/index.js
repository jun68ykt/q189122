import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from 'redux-logger'
import { Provider } from "react-redux";
import App from './App';
import { fluitsReducer } from './fluits_ducks';

const reducer = combineReducers({ fluits: fluitsReducer });

const store = createStore(
  reducer,
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);

