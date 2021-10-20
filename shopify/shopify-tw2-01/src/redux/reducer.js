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


/** 
 * CREATE CHECKOUT ID
*/
const initalStateCheckoutId = {
  checkout_creating: false,
  checkout_created: false,
  checkout_error: '',
  checkout_id: '',
}

export const reducerCheckout = (state = initalStateCheckoutId, action) => {

  switch (action.type) {
    
    case actionType.CHECKOUT_CREATING:
      return {
        checkout_fetching: true,
        checkout_id: ''
      }
    case actionType.CHECKOUT_CREATED:
      return {
        checkout_id: action.data,
        checkout_created: true,
      }
    case actionType.CHECKOUT_CREATE_ERROR:
      return {
        checkout_created: false,
        checkout_error: action.error
      }
    /** default state */
    default:
      return state;
    }
}