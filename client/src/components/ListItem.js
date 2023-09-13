import React from 'react';
import { TickIcon, ProgressBar } from './';

const ListItem = ({ task }) => {
  return (
    <li className='list-item'>

      <div className='info-container'>
          <TickIcon/>
          <p className='task-title'>{task.title}</p>
          <ProgressBar/>
      </div>

      <div className='button-container'>
        <button className='edit'>EDIT</button>
        <button className='delete'>DELETE</button>
      </div>

    </li>
  );
};

export default ListItem;
