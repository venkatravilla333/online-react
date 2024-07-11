import { FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS } from "./actionTypes"

var initialState = {
  loading: false,
  products: [],
  error: ''
}

export var productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true
      }
      break;
    case FETCH_PRODUCTS_SUCCESS:
      return {
        
        loading: false,
        products: action.payload,
        error: ''
        
      }
      break;
    case FETCH_PRODUCTS_FAILURE:
      return {
        // ...state
        loading: false,
        products: [],
        error: action.payload
      }
      break;
    default:
      return state
    
  }
  
}

