const {actionType} = require('./actionTypes');


/**
 * FETCH ALL PRODUCTS
 */
const initalStateAllProducts = {
  product_fetching: false,
  product_fetched: false,
  product_fetch_error: '',
  product_data: [],
  product_dataLength: 0,
}

export const reducerFetchAllProducts = (state = initalStateAllProducts, action) => {

  //console.log("REDUCER???",action.type);

  switch (action.type) {
    
    case actionType.PRODUCT_START_FETCHING:
      return {
        product_fetching: true,
        product_data: []
      }
    case actionType.PRODUCT_FETCHED:
      return {
        product_data: action.data,
        product_fetched: true,
      }
    case actionType.PRODUCT_FETCH_ERROR:
      return {
        product_fetched: false,
        product_fetching: false,
        product_fetch_error: action.error
      }
    /** default state */
    default:
      return state;
    }

}


/** 
 * FETCH SINGLE PRODUCT BY ID
 */
const initalStateProduct = {
  a_product_fetching: false,
  a_product_fetched: false,
  a_product_fetch_error: '',
  a_product_data: [],
  a_product_dataLength: 0,
}

export const reducerFetchProduct = (state = initalStateProduct, action) => {

  switch (action.type) {
    
    case actionType.A_PRODUCT_START_FETCHING:
      return {
        a_product_fetching: true,
        a_product_data: []
      }
    case actionType.A_PRODUCT_FETCHED:
      return {
        a_product_data: action.data,
        a_product_fetched: true,
      }
    case actionType.A_PRODUCT_FETCH_ERROR:
      return {
        a_product_fetched: false,
        a_product_fetching: false,
        a_product_fetch_error: action.error
      }
    /** default state */
    default:
      return state;
    }
}