import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import {

  reducerFetchAllProducts,
  reducerFetchProduct,
  reducerCreateCheckout,
  reducerAddToCart,
  reducerFetchCheckout,
  
  
} from './reducer';

const reducer = combineReducers({

    reducerFetchAllProducts,
    reducerFetchProduct,
    reducerCreateCheckout,
    reducerAddToCart,
    reducerFetchCheckout,
    
  }
);

const middleware = applyMiddleware(thunk, createLogger());

export const store = createStore(reducer, middleware);