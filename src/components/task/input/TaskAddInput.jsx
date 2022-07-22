import React from 'react';
import { v4 as uuid } from 'uuid';

export const TaskAddInput = ({inputText, setInputText, takList, setTaskList}) => {
        
    const handleSubmit = (e) => {
        const taskId = uuid();
        e.preventDefault();//エンターを押したときの更新がされなくなる
        //カードを追加
        if(inputText ===""){
            return;
        }
        setTaskList([...takList,
        {
            id: taskId,
            draggableId: `task-${taskId}`,
            text: inputText,
        }]);
        setInputText("");
    }
    const handleChange = (e) => {
       setInputText(e.target.value);
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
            type='text'
            placeholder='add a tack'
            className='taskAddInput'
            onChange={handleChange}
            value={inputText}
            />
        </form>
    </div>
  );
};
