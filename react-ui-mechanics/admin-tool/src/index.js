import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {Provider} from 'react-redux'
import {applyMiddleware, createStore} from 'redux'
import rootReducer from './store/reducers'

import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import {Router} from "react-router-dom";
import {createBrowserHistory} from 'history';
const history = createBrowserHistory({forceRefresh: false});




let middleware = applyMiddleware(promise, thunk);
const store = createStore(rootReducer, middleware)


ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App/>
        </Router>
    </Provider>,
    document.getElementById('root')
);

