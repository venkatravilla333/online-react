import React from 'react'
import './modal.css'
import ReactDOM from 'react-dom'

function Modal(props) {
  console.log(props.name)
  return ReactDOM.createPortal(
     <div className='modal-overlay'>
      <div className='modal-content'>
        <h3>Modal Header</h3>
        <p>Modal body Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid neque, voluptatibus tempore quos ut eum qui cumque distinctio quaerat optio.</p>
        <p>Modal footer</p>
        <button onClick={props.toggleModal}>close</button>
      </div>
    </div>, document.getElementById('portal-root')
  )
  
}

export default Modal