import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import  { Task } from './Task';

const reorder = (takList, startIndex, endIndex) => {
  const remove = takList.splice(startIndex, 1);
  takList.splice(endIndex, 0, remove[0]);
}

export const Tasks = ({takList, setTaskList}) => {
  const handleDrangEnd = (result) => {
  //タスクを並び変える
  reorder(takList, result.source.index, result.destination.index);
  setTaskList(takList);
  }

  return (
    <div>
      <DragDropContext onDragEnd={handleDrangEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {takList.map((task, index) => (
                <div key={task.id}>
                    <Task
                      index={index}
                      task={task} 
                      takList={takList} 
                      setTaskList={setTaskList}
                      />
                </div>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        </DragDropContext>
    </div>
  );
};
