import React, { useState } from 'react';
import { TickIcon, ProgressBar, Modal } from '.';
import PropTypes from 'prop-types'; // Import PropTypes

function ListItem({ task, getData }) {
  const [showModal, setShowModal] = useState(false)

  const deleteItem = async () => {
    try {
      // Disable 'no-undef' check for the following line
      // eslint-disable-next-line no-undef
      const response = await fetch(`${process.env.REACT_APP_SERVERURL}/todos/${task.id}`, {
        method: 'DELETE',
      })
      if (response.status === 200) {
        getData()
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <li className="list-item">

      <div className="info-container">
        <TickIcon />
        <p className="task-title">{task.title}</p>
        <ProgressBar />
      </div>

      <div className="button-container">
        <button className="edit" onClick={() => setShowModal(true)}>EDIT</button>
        <button className="delete" onClick={() => deleteItem()}>DELETE</button>
      </div>
      {showModal && <Modal mode="edit" setShowModal={setShowModal} getData={getData} task={task} />}
    </li>
  );
}


// Define PropTypes for the props
ListItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    // Add more PropTypes for other properties if necessary
  }).isRequired,
  getData: PropTypes.func.isRequired,
};

export default ListItem;
