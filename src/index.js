import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from 'redux-logger'
import { Provider } from "react-redux";
import App from './App';
import { fruitsReducer } from './fruits_ducks';

const reducer = combineReducers({ fruits: fruitsReducer });

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

