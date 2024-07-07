

export var UPDATE_NAME = 'UPDATE_NAME'


export var updateName = (value) => {
 return {
   type: UPDATE_NAME,
   payload: value
  }
}