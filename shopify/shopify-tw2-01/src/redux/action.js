import {actionType} from './actionTypes';
import Client from 'shopify-buy';


// Initializing a client to return content in the store's primary language
const client = Client.buildClient({
  storefrontAccessToken: 'cc92551596409162e6f510c8efd7f0b0',
  domain: 'yw-t-shirt.myshopify.com',
});


/**
 * 
 * create checkout & 
 * store checkout Id into local storage
 */
export const actionCreateCheckout = () => {
  
    return function (dispatch) {

      dispatch({type:actionType.CHECKOUT_CREATING})

      // Create an empty checkout
      client.checkout.create().then((checkout) => {
          // Do something with the checkout
          console.log("CHECKOUT ACTION:",checkout.id);
          dispatch({
            type: actionType.CHECKOUT_CREATED,
            checkoutId: checkout.id,
            data: checkout
          })
          
          /** store checkout into localstorage */
          if (!localStorage.checkout) {
            localStorage.setItem("checkout", checkout.id);
          }
        })
        .catch(error => {
          dispatch({
            type: actionType.CHECKOUT_CREATE_ERROR,
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
export const actionAddToCart = (checkoutId, variantId, quantity) => {

  //const lineItemsToAdd = [{ variantId, quantity: parseInt(quantity, 10)}];
  const lineItemsToAdd = [
    {
      variantId: variantId,
      quantity: parseInt(quantity, 10),
      //customAttributes: [{key: "MyKey", value: "MyValue"}]
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

/**
 * 
 * UPDATE CART
 */
export const actionUpdateCart = (checkoutId, pid, quantity) => {

  const lineItemsToUpdate = [
    {
      id: pid, 
      quantity: parseInt(quantity, 10),
    }
  ];

  console.log("line item to update",lineItemsToUpdate);
  console.log("checkoutid action", checkoutId)

  return function(dispatch){

    dispatch({type: actionType.CART_UPDATING})

    // Update the line item on the checkout (change the quantity or variant)
      client.checkout.updateLineItems(checkoutId, lineItemsToUpdate).then((checkout) => {
        // Do something with the updated checkout
        console.log(checkout.lineItems); // Quantity of line item 
        dispatch({
          type: actionType.CART_UPDATED,
          data: checkout.lineItems,
        })
      }).catch((error) => {
        dispatch({
          type: actionType.CART_UPDATE_ERROR,
          error: error
        })
      })

  }

}



/**
 * FETCH CHECKOUT
 */
export const actionFetchCheckout = (checkoutId) => {

  return function(dispatch){
    dispatch({
      type: actionType.CHECKOUT_FETCHING
    })

    client.checkout.fetch(checkoutId).then((checkout) => {
      
      console.log(checkout);
      dispatch({
        type: actionType.CHECKOUT_FETCHED,
        data: checkout,
      })

    })
    .catch(error => {
      dispatch({
        type: actionType.CHECKOUT_FETCH_ERROR,
        error: error,
      })
    })
  }
}