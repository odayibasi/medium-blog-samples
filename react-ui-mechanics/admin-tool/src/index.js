import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {Provider} from 'react-redux'
import { applyMiddleware, createStore, compose } from 'redux';
import rootReducer from './store/reducers'

import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';


import {Router} from "react-router-dom";
import {createBrowserHistory} from 'history';
const history = createBrowserHistory({forceRefresh: false});


let middleware = applyMiddleware(promise, thunk);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 })  || compose;
const enhancer = composeEnhancers(middleware);
const store = createStore(rootReducer, enhancer);



ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App/>
        </Router>
    </Provider>,
    document.getElementById('root')
);

