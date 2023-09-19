import React from 'react'
import { useState } from 'react'
import Modal from './Modal'



const ListHeader = ({ ListName, getData }) => {
  const [showModal, setShowModal] = useState(false)
  
  const signOut = () => {
    console.log('Sign Out :D')
  }

  return (
    <div className='list-header'>
        <h1>{ListName}</h1>
        <div className='button-container'>
            <button className='create' onClick={() => setShowModal(true)}>Add New</button>
            <button className='signout' onClick={signOut}>Sign Out</button>
        </div>
        {showModal && <Modal mode={'create'} setShowModal={setShowModal} getData={getData}/>}
    </div>
  )
}

export default ListHeader