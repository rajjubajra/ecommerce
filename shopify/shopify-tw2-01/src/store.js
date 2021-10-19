import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import {
  
  reducerFetchAllProducts,
} from './redux/reducer';

const reducers = combineReducers(
  reducerFetchAllProducts,
)

const middleware = applyMiddleware(thunk, createLogger());

export const store = createStore(reducers, middleware);