import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from "redux";
import {Provider} from "react-redux";

import App from './App';

import './index.css';

import calculatorReducer from "./store/reducers/calculator";

const rootReducer = combineReducers({
  calculator: calculatorReducer
});

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);