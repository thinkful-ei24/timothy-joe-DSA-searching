import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const unsortedDataSet = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55];
const dataSet = unsortedDataSet.sort((a, b) => a - b);

ReactDOM.render(<App dataSet={dataSet}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
