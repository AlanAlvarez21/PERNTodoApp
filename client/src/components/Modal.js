import React, { useState } from 'react'
import PropTypes from 'prop-types'; // Import PropTypes

function Modal({
  mode, setShowModal, getData, task,
}) {
  const editMode = mode === 'edit'

  const [data, setData] = useState({
    user_email: editMode ? task.user_email : 'alanbrito@yopmail.com',
    title: editMode ? task.title : null,
    progress: editMode ? task.progress : 50,
    date: editMode ? task.date : new Date(),
  })

  const postData = async (e) => {
    e.preventDefault()
    try {
      // Disable 'no-undef' check for the following line
      // eslint-disable-next-line no-undef
      const response = await fetch(`${process.env.REACT_APP_SERVERURL}/todos`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (response.status === 200) {
        setShowModal(false)
        getData()
      }
    } catch (error) {
      console.error(error)
    }
  }

  const editData = async (e) => {
    e.preventDefault()
    try {
      // Disable 'no-undef' check for the following line
      // eslint-disable-next-line no-undef
      const response = await fetch(`${process.env.REACT_APP_SERVERURL}/todos/${task.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (response.status === 200) {
        setShowModal(false)
        getData()
      }
    } catch (error) {
      console.error(error)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setData((data) => ({
      ...data,
      [name]: value,
    }))
  }

  return (
    <div className="overlay">
      <div className="modal">
        <div className="form-title-container">
          <h3>
            {' '}
            Let´s
            {mode}
            {' '}
            your task
            {' '}
          </h3>
          <button onClick={() => setShowModal(false)}> x </button>
        </div>

        <form>
          <input
            required
            maxLength={30}
            placeholder=" Your task goes here"
            name="title"
            value={data.title}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="range">Drag to select your current progress</label>
          <input
            required
            type="range"
            id="range"
            min="0"
            max="100"
            name="progress"
            value={data.progress}
            onChange={handleChange}
          />
          <input className={mode} type="submit" onClick={editMode ? editData : postData} />
        </form>
      </div>
    </div>
  )
}

// Define PropTypes for the props
Modal.propTypes = {
  mode: PropTypes.string.isRequired, // Example: string is the expected type
  setShowModal: PropTypes.func.isRequired, // Example: func is the expected type
  getData: PropTypes.func.isRequired, // Example: func is the expected type
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    user_email: PropTypes.string.isRequired,
    title: PropTypes.string,
    progress: PropTypes.number,
    date: PropTypes.instanceOf(Date),
    // Add more PropTypes for other properties if necessary
  }),
};

export default Modal
