import React, { useState } from 'react';

const TodoInsert = ({ onInsert }) => {
  const initialState = {
    title: '',
    content: '',
  };

  const [todo, setTodo] = useState(initialState);

  const onChangeTodoHandler = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setTodo({ ...todo, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onInsert(todo);
    setTodo(initialState);
  };
  return (
    <form>
      <input
        type='text'
        name='title'
        placeholder='제목을 입력하세요'
        value={todo.title}
        onChange={onChangeTodoHandler}
      />
      <input
        type='text'
        name='content'
        placeholder='본문을 입력하세요'
        value={todo.content}
        onChange={onChangeTodoHandler}
      />
      <button onClick={onSubmit}>추가하기</button>
    </form>
  );
};

export default TodoInsert;
