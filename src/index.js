import React from 'react';
import ReactDOM from 'react-dom';
import Root from './router';
import * as serviceWorker from './serviceWorker';
import createdStore from './redux/store'
import { Provider } from 'react-redux';
import './index.css';

const store = createdStore

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

unsubscribe();
ReactDOM.render(
  <Provider store={store}><Root /></Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
