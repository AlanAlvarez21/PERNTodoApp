import React, { useState } from 'react'
import Modal from './Modal'
import PropTypes from 'prop-types'; // Import PropTypes

function ListHeader({ ListName, getData }) {
  const [showModal, setShowModal] = useState(false)

  const signOut = () => {
    console.log('Sign Out :D')
  }

  return (
    <div className="list-header">
      <h1>{ListName}</h1>
      <div className="button-container">
        <button className="create" onClick={() => setShowModal(true)}>Add New</button>
        <button className="signout" onClick={signOut}>Sign Out</button>
      </div>
      {showModal && <Modal mode="create" setShowModal={setShowModal} getData={getData} />}
    </div>
  )
}

// Define PropTypes for the props
ListHeader.propTypes = {
  ListName: PropTypes.string.isRequired, // Example: string is the expected type
  getData: PropTypes.func.isRequired, // Example: func is the expected type
};


export default ListHeader
