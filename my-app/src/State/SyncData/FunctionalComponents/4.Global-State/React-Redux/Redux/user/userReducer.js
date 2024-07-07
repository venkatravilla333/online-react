import { UPDATE_NAME } from "./userActions"


var initialState = {
  name : 'sachin'
}

export var userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NAME:
      return {
        name: 'kohli'
      }
      break;
    default:
      return state
  }
}