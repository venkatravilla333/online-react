import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../Redux/cake/cakeActions'
function J() {
  var noOfCakes = useSelector((state) => state.cakeReducer.noOfCakes)
  var dispacth =  useDispatch()
  return (
    <div>
      <h2>No of cakes : {noOfCakes}</h2>
      <button onClick={()=>dispacth(buyCake())}>buy cake</button>
    </div>
  )
}

export default J

// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { buyCake } from '../Redux/cake/cakeActions'

// export class J extends Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     return (
//       <div>J :no of cakes: {this.props.noOfcakes}
//         <button onClick={this.props.buyCake}>buy cake</button>
//       </div>
//     )
//   }
// }

// var mapStateToProps = (state) => {
//   return {
//     noOfcakes: state.cakeReducer.noOfCakes
//   }
// }
// var mapDispatchToProps = (dispatch) => {
//   return {
//     buyCake: () => {
//       dispatch(buyCake());
//     },
//   }; 
// }

// export default connect(mapStateToProps, mapDispatchToProps) (J)