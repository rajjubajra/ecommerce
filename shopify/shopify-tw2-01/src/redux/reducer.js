const {actionType} = require('./actionTypes');


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
        product_dataLength: action.data.data.length
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


