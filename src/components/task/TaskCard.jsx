import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { TaskCardTitle } from '../../components/task/TaskCardTitle';
import { TaskCardDeleteButton } from './button/TaskCardDeleteButton';
import { TaskAddInput } from './input/TaskAddInput';
import { Tasks } from './Tasks';


export const TackCard = ({taskCardsList, setTaskCardsList, taskCard, index,}) => {
  const [inputText, setInputText] = useState("");
  const [takList, setTaskList] = useState([]);

  return (
    <Draggable draggableId={taskCard.id} index={index}>
      {(provided) => (
        <div className='taskCard' ref={provided.innerRef}
        {...provided.draggableProps}

        >
        <div 
          className='taskCardTitleAndTackCardDeleteButton'
          {...provided.dragHandleProps}
          >
        <TaskCardTitle/>
        <TaskCardDeleteButton 
        taskCardsList={taskCardsList} 
        setTaskCardsList={setTaskCardsList} 
        taskCard={taskCard}/>
        </div>
        <TaskAddInput inputText={inputText} setInputText={setInputText} takList={takList} setTaskList={setTaskList} />
        <Tasks inputText={inputText} takList={takList} setTaskList={setTaskList}/>
      </div>
      )}
    </Draggable>
  );
};
