import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import {

  reducerFetchAllProducts,
  reducerFetchProduct,
  
} from './reducer';

const reducer = combineReducers({

    reducerFetchAllProducts,
    reducerFetchProduct,

  }
);

const middleware = applyMiddleware(thunk, createLogger());

export const store = createStore(reducer, middleware);