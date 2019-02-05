import reducer from './reducer';
import {createStore, applyMiddleware, compose} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';



let storeMiddleware = compose(applyMiddleware(promiseMiddleware()))

export default createStore(reducer, storeMiddleware);
