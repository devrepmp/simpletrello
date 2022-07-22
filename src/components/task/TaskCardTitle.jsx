import React,{useState } from 'react';

export const TaskCardTitle = () => {
    const[ isClick, setIsClick] = useState(false);
    const[ inputCardTitle, setInputCardTitle] = useState("Today");
    const handleClick = () => {
        setIsClick(true);
        console.log(isClick);
    };
    const handleChange = (e) => {
        console.log(e.target.value);
        setInputCardTitle(e.target.value);
    };
    const handleSubmit = (e) =>{
        e.preventDefault();//エンターを押したときの更新がされなくなる
        setIsClick(false);
    };
    const handleBlur = () => {
        setIsClick(false);
    }

  return (
    <div onClick={handleClick} className="taskTitleInputArea">
        {isClick ? 
        <form onSubmit={handleSubmit} /**onSubmitエンターで決定 */>
            <input
            autoFocus/**クリックするとinputにフォーカスがあたる */
            className='taskCardTitleInput'
            type="text" 
            onChange={handleChange}/** 文字が入力のたびに呼ぶ*/ 
            onBlur={handleBlur} /**他のところをクリックで入力完了*/
            value={inputCardTitle} /** */ 
            />
        </form> 
        : <h3>{inputCardTitle}</h3>
        }
    </div>
  );
};
