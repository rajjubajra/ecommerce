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
const initalStateCheckout = {
  checkout_creating: false,
  checkout_created: false,
  checkout_error: '',
  checkout_id: '',
  data: '',
}

export const reducerCreateCheckout = (state = initalStateCheckout, action) => {

  switch (action.type) {
    
    case actionType.CHECKOUT_CREATING:
      return {
        checkout_fetching: true,
        checkout_id: ''
      }
    case actionType.CHECKOUT_CREATED:
      return {
        checkout_id: action.checkoutId,
        data: action.data,
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



/** 
 * ADD TO CART [Adding Line Items]
 */
 const initalStateAddToCart = {
  adding_to_cart: false,
  added_to_cart: false,
  add_to_cart_error: '',
  cart_items: [],
}

export const reducerAddToCart = (state = initalStateAddToCart, action) => {

  switch (action.type) {
    
    case actionType.ADDING_TO_CART:
      return {
        adding_to_cart: true,
        cart_items: []
      }
    case actionType.ADDED_TO_CART:
      return {
        cart_items: action.data,
        added_to_cart: true,
      }
    case actionType.ADD_TO_CART_ERROR:
      return {
        added_to_cart: false,
        add_to_cart_error: action.error
      }
    /** default state */
    default:
      return state;
    }
}



/** 
 * ADD TO CART [Adding Line Items]
 */
const initalStateUpdateCart = {
  cart_updating: false,
  cart_updated: false,
  cart_update_error: '',
  cart_items: [],
}

export const reducerUpdateCart = (state = initalStateUpdateCart, action) => {

  switch (action.type) {
    
    case actionType.CART_UPDATING:
      return {
        cart_updating: true,
        cart_items: []
      }
    case actionType.CART_UPDATED:
      return {
        cart_items: action.data,
        cart_updated: true,
      }
    case actionType.CART_UPDATE_ERROR:
      return {
        cart_updated: false,
        cart_update_error: action.error
      }
    /** default state */
    default:
      return state;
    }

}





/** 
 * FETCH CHECKOUT
 */
 const initalStateFetchCheckout = {
  checkout_fetching: false,
  checkout_fetched: false,
  checkout_fetch_error: '',
  checkout_data: '',
}

export const reducerFetchCheckout = (state = initalStateFetchCheckout, action) => {

  switch (action.type) {
    
    case actionType.CHECKOUT_FETCHING:
      return {
        checkout_fetching: true,
        checkout_data: []
      }
    case actionType.CHECKOUT_FETCHED:
      return {
        checkout_data: action.data,
        checkout_fetched: true,
      }
    case actionType.CHECKOUT_FETCH_ERROR:
      return {
        checkout_fetched: false,
        checkout_fetch_error: action.error
      }
    /** default state */
    default:
      return state;
    }

}