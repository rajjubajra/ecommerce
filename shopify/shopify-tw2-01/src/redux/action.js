import {actionType} from './actionTypes';
import Client from 'shopify-buy';


// Initializing a client to return content in the store's primary language
const client = Client.buildClient({
  storefrontAccessToken: 'cc92551596409162e6f510c8efd7f0b0',
  domain: 'yw-t-shirt.myshopify.com',
});


/**
 * 
 * @returns store checkoutId into local storage
 */
export const actionCreateCheckoutId = () => {
  
    return function (dispatch) {

      dispatch({type:actionType.CHECKOUT_ID_CREATING})

      // Create an empty checkout
      client.checkout.create().then((checkout) => {
          // Do something with the checkout
          //console.log("CHECKOUT ACTION:",checkout.id);
          dispatch({
            type: actionType.CHECKOUT_ID_CREATED,
            data: checkout.id,
          })
          
          /** store checkout into localstorage */
          if (!localStorage.checkout) {
            localStorage.setItem("checkout", checkout.id);
          }
        })
        .catch(error => {
          dispatch({
            type: actionType.CHECKOUT_ID_CREATE_ERROR,
            fetched: false,
            error: error
          })
        })
    }    

}


/**
 * 
 * @returns FETCH ALL PRODUCTS
 */
export const actionFetchAllProduct = () => {

  return function (dispatch) {
    
    dispatch({
      type: actionType.PRODUCT_START_FETCHING
    })

    //Fetch all products in your shop
    client.product.fetchAll()
    .then((products) => {
      console.log(products);
      //Do something with the products
      dispatch({
        type: actionType.PRODUCT_FETCHED,
        data: products
      })
    })
    .catch(err => {
      dispatch({ 
        type: actionType.PRODUCT_FETCH_ERROR,
        fetched: false,
        err:err
      })
    })
  }// action fetchAllProducts closed



}

/**
 * FETCH SINGLE PRODUCT PRODUCT BY ID
*/
export const actionFetchSingleProduct = (productId) => {

  return function (dispatch) {

  dispatch({
    type: actionType.A_PRODUCT_START_FETCHING
  })  

  client.product.fetch(productId).then((product) => {
   // console.log(product);
    dispatch({
      type: actionType.A_PRODUCT_FETCHED,
      data: product,
    })
  }).catch((error) => {
    dispatch({
      type: actionType.A_PRODUCT_FETCH_ERROR,
      fetched: false,
      error: error
    })
  })
  

  }
  
  

}


/**
 * ADD TO CART [Adding Line Items]
 */
export const actionAddToCart = (checkoutId, variantId, qty) => {

  const lineItemsToAdd = [
    {
      variantId: variantId,
      quantity: qty,
      customAttributes: [{key: "MyKey", value: "MyValue"}]
    }
  ];

  return function(dispatch){

    dispatch({type:actionType.ADDING_TO_CART})

    // Add an item to the checkout
    client.checkout.addLineItems(checkoutId, lineItemsToAdd).then((checkout) => {
    // Do something with the updated checkout
      console.log(checkout.lineItems); // Array with one additional line item
      dispatch({
        type: actionType.ADDED_TO_CART,
        data: checkout.lineItems
      })
    })
    .catch(error => {
      dispatch({
        type: actionType.ADD_TO_CART_ERROR,
        fetched: false,
        error: error,
      })
    })
  }

}