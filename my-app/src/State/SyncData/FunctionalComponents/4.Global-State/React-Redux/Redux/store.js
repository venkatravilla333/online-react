
import { createStore } from 'redux'
import { countReducer } from './countReducer'



 var store = createStore(countReducer)

 export default store