import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import {

  reducerFetchAllProducts,
  
} from './reducer';

const reducer = combineReducers({

    reducerFetchAllProducts,

  }
);

const middleware = applyMiddleware(thunk, createLogger());

export const store = createStore(reducer, middleware);