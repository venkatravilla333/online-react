
import {configureStore} from '@reduxjs/toolkit'
import productReducer from './slices/productSlice'

export var store = configureStore({
  reducer: {
    productReducer: productReducer
  }
})