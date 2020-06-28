import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';
import appReducers from './reducers/index';
import { Provider } from 'react-redux'; //dung de ket noi giua react va redux

const store = createStore(
    appReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
//Trong ung dung redux chi co 1 nguon state duy nhat la store
//Do do ta se khong con su dung state tren app.js

// ReactDOM.render(<App />, document.getElementById('root'));
//App: Selector
//Lay app do va cai root

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('content'));
serviceWorker.unregister();

