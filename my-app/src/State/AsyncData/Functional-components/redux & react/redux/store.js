
import {combineReducers, createStore, applyMiddleware} from 'redux'
import { productReducer } from './productReducer'

import { thunk } from 'redux-thunk'


var rootReducer = combineReducers({
productReducer: productReducer
})

export var store = createStore(rootReducer, applyMiddleware(thunk))

