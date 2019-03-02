import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Index from './car/index';
import Index from './day15_1/view/index';
import store from './day15_1/store/store'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Provider store={store}><Index /></Provider>, document.getElementById('root'));

// ReactDOM.render(<Provider><Index /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

