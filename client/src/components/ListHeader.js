import React from 'react'

const signOut = () => {
  console.log('Sign Out :D')
}

const ListHeader = ({ ListName }) => {
  return (
    <div className='list-header'>
        <h1>{ListName}</h1>
        <div className='button-container'>
            <button className='create'>Add New</button>
            <button className='signout' onClick={signOut}>Sign Out</button>
        </div>
    </div>
  )
}

export default ListHeader