export var INCREASE = 'INCREASE'
export var DECREASE = 'DECREASE'


export var increaseCount = () => {
 return {
    type: INCREASE
  } 
}
export var decreaseCount = () => {
 return {
    type: DECREASE
  } 
}