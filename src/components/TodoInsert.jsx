import React, { useState } from 'react';

const TodoInsert = ({ dispatcher }) => {
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

    if (todo.title && todo.content) {
      dispatcher.onAddTodo({ payload: todo });

      // console.log('add????');

      setTodo(initialState);
    } else {
      window.confirm('입력하지 않은 항목이 있습니다');
    }
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
