
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { countReducer } from './count/countReducer'
import { cakeReducer } from './cake/cakeReducer'
import { userReducer } from './user/userReducer'
import { composeWithDevTools } from 'redux-devtools-extension';


var rootReducer = combineReducers({
  cakeReducer: cakeReducer,
  countReducer: countReducer,
  userReducer: userReducer
})

 var store = createStore(rootReducer, composeWithDevTools(applyMiddleware()))

 export default store