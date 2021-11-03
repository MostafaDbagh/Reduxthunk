import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import thunk from 'redux-thunk'
import reportWebVitals from './reportWebVitals';
import {createStore,applyMiddleware} from 'redux'
import  Reducer  from './reducers/mian';
import { Provider } from 'react-redux';

const store = createStore(Reducer,applyMiddleware(thunk)); 
ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
);


reportWebVitals();
