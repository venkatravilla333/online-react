import {configureStore} from '@reduxjs/toolkit'
import cakeReducer from './slices/cakeSlice/cakeSlice'


export var store = configureStore({
  reducer: {
    cakeReducer: cakeReducer,
  }
})