import {actionType} from './actionTypes';
import Client from 'shopify-buy';



// Initializing a client to return content in the store's primary language
const client = Client.buildClient({
  storefrontAccessToken: 'cc92551596409162e6f510c8efd7f0b0',
  domain: 'yw-t-shirt.myshopify.com',
});


//export const actionNav = () => {
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