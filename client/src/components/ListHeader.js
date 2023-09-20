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

ListHeader.propTypes = {
  ListName: PropTypes.string.isRequired, 
  getData: PropTypes.func.isRequired,
};


export default ListHeader
