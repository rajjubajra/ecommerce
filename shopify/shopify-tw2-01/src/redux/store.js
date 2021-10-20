import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import {

  reducerFetchAllProducts,
  reducerFetchProduct,
  reducerCreateCheckoutId,
  
  
} from './reducer';

const reducer = combineReducers({

    reducerFetchAllProducts,
    reducerFetchProduct,
    reducerCreateCheckoutId,
    
  }
);

const middleware = applyMiddleware(thunk, createLogger());

export const store = createStore(reducer, middleware);