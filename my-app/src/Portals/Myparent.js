import React, { useState } from 'react'
import Modal from './Modal'
import './modal.css'

function Myparent() {
  var [openModal, setOpenModal] = useState(false)

  var toggleModal = () => {
    setOpenModal(!openModal)
  }
  
  return (
    <div className='myparent'>
      <button onClick={toggleModal}>open modal</button>
      {openModal && <Modal toggleModal={toggleModal } name='sachin' /> }
    </div>
  )
}

export default Myparent