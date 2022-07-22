import React from 'react';
import { v4 as uuid } from 'uuid';

export const AddTackCardButton = ({taskCardsList, setTaskCardsList}) => {
  const addTackCard = () => {
    const taskCardId = uuid();
    setTaskCardsList([
      ...taskCardsList,
    {
      id: taskCardId,
      draggableId:`item${taskCardId}`,
    }])
  };
  return (
    <div className='addTaskCardButtonArea'>
      <button className='addTaskCardButton' 
      onClick={addTackCard}>+</button>
    </div>
  );
};
