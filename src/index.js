import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "antd/dist/antd.css";
import Root from './router';
import * as serviceWorker from './serviceWorker';
import createdStore from './redux/store'
// import { addToCart, updateCart, deleteFromCart } from './redux/actions'
import { Provider } from 'react-redux';

const store = createdStore

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

// store.dispatch(addToCart('Coffee 500gm', 1, 250));
// store.dispatch(addToCart('Flour 1kg', 2, 110));
// store.dispatch(addToCart('Juice 2L', 1, 250));

// // Update Cart
// store.dispatch(updateCart('Flour 1kg', 5, 110));

// // Delete from Cart
// store.dispatch(deleteFromCart('Coffee 500gm'));

unsubscribe();
ReactDOM.render(
  <Provider store={store}><Root /></Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
