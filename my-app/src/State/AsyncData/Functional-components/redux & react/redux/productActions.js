import { FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS } from "./actionTypes"
import axios from 'axios'


var fetchProductsRequest = () => {
  return {
    type: FETCH_PRODUCTS_REQUEST
  }
}
var fetchProductsSuccess = (products) => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products
  }
}
var fetchProductsFailure = (error) => {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    payload: error
  }
}

export var fetchProducts = () => {
  return (dispatch) => {
    dispatch(fetchProductsRequest())
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        // console.log(res.data);
       dispatch(fetchProductsSuccess(res.data));
      })
      .catch((error) => {
        dispatch(fetchProductsFailure(error.message));
      });
    
  }
}