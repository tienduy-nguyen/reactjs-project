import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
//App: Selector
//Lay app do va cai root

ReactDOM.render(<App/>, document.getElementById('content'));
serviceWorker.unregister();


