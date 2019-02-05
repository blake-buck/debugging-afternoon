/*
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import reduxPromiseMiddleware from 'redux-promise-middleware';

export default createStore(reducer, applyMiddleware(reduxPromiseMiddleware));
*/

import reducer from './reducer';
import {createStore, applyMiddleware, compose} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';



//let storeMiddleware = (applyMiddleware(promiseMiddleware))

export default createStore(reducer, applyMiddleware(promiseMiddleware))