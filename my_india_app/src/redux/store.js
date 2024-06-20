import {   legacy_createStore,applyMiddleware } from 'redux';
import {thunk} from "redux-thunk"
import { ProductReducer } from './reducer';

const store = legacy_createStore(ProductReducer,applyMiddleware(thunk))
export default store;