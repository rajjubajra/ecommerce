import {actionType} from './actionTypes';
import Client from 'shopify-buy';

// Initializing a client to return content in the store's primary language
const client = Client.buildClient({
  domain: 'your-shop-name.myshopify.com',
  storefrontAccessToken: 'your-storefront-access-token'
});


//export const actionNav = () => {
export const actionFetchAllProduct = () => {

  return function (dispatch) {

    /** MAIN MENU  */
    dispatch({
      type: actionType.PRODUCT_START_FETCHING
    })

    // Fetch all products in your shop
    client.product.fetchAll().then((products) => {
      // Do something with the products
      dispatch({
        type: actionType.PRODUCT_FETCHED,
        data: products
      })
      console.log(products);
    })

  }



}