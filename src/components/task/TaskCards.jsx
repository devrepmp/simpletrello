import React, { useState } from 'react';
import { TackCard } from './TaskCard';
import { AddTackCardButton } from './button/AddTackCardButton';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const reorder = (taskCardsList, startIndex, endIndex) => {
  const remove = taskCardsList.splice(startIndex, 1);
  taskCardsList.splice(endIndex, 0, remove[0]);
}

export const TaskCards = () => {
  const [taskCardsList, setTaskCardsList] = useState([{
    id: "0",
    draggableId: 'item0',
  }]); 
  const handleDragEnd = (result) => {
  //タスクを並び変える
  reorder(taskCardsList, result.source.index, result.destination.index);
  setTaskCardsList(taskCardsList);
  }
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId='droppable' direction='horizontal'>
        {(provided) => (
          <div
           className='taskCardArea'
           {...provided.droppableProps}
           ref={provided.innerRef}
          >
          {taskCardsList.map((taskCard, index) => (
            <TackCard 
            key={taskCard.id}
            index={index}
            taskCardsList={taskCardsList}
            setTaskCardsList={setTaskCardsList}
            taskCard={taskCard}
            />
          ))}
          {provided.placeholder}
            <AddTackCardButton
            taskCardsList={taskCardsList} 
            setTaskCardsList={setTaskCardsList}
            />
        </div>
        )}
    </Droppable>
    </DragDropContext>
  );
};
