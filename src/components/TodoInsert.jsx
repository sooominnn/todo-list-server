import React, { useState } from 'react';
import { styled } from 'styled-components';
import { MdAdd } from 'react-icons/md';

const TodoInsert = ({ dispatch }) => {
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

  // const onSubmit = (e) => {
  //   e.preventDefault();

  //   if (todo.title && todo.content) {
  //     dispatch({ type: 'ADD', todo });
  //     // dispatcher.onAddTodo({ type: 'ADD', todo });

  //     setTodo(initialState);
  //   } else {
  //     window.confirm('입력하지 않은 항목이 있습니다');
  //   }
  // };

  // const onSubmit = async (e) => {
  //   e.preventDefault();

  //   if (todo.title && todo.content) {
  //     // JSON Server에 데이터를 추가하기 위해 POST 요청
  //     try {
  //       const response = await fetch('http://localhost:3002/todos', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify(todo),
  //       });

  //       if (response.status === 201) {
  //         // 데이터가 성공적으로 추가되면 Todo를 dispatch를 사용하여 추가
  //         const newTodo = await response.json();
  //         dispatch({ type: 'ADD', todo: newTodo });
  //         setTodo(initialState);
  //       } else {
  //         console.error('데이터 추가 실패');
  //       }
  //     } catch (error) {
  //       console.error('데이터 추가 중 오류 발생: ', error);
  //     }
  //   } else {
  //     window.confirm('입력하지 않은 항목이 있습니다');
  //   }
  // };

  const addTodo = () => {
    const todo = { title: '', content: '' };

    fetch('http://localhost:3002/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo),
    });
  };

  return (
    <TodoInsertContainer>
      <TodoInsertInput
        type='text'
        name='title'
        placeholder='제목을 입력하세요'
        value={todo.title}
        onChange={onChangeTodoHandler}
      />
      <TodoInsertInput
        type='text'
        name='content'
        placeholder='본문을 입력하세요'
        value={todo.content}
        onChange={onChangeTodoHandler}
      />
      <TodoInsertButton onClick={addTodo}>
        <MdAdd />
      </TodoInsertButton>
    </TodoInsertContainer>
  );
};

export default TodoInsert;

const TodoInsertContainer = styled.div`
  display: flex;
  background: #ffe0f3;
`;

const TodoInsertInput = styled.input`
  background: none;
  outline: none;
  border: none;
  padding: 0.5rem;
  font-size: 0.9rem;
  line-height: 1.5;
  /* color: #ff44c4; */
  flex: 1;
  margin-left: 30px;
`;

const TodoInsertButton = styled.button`
  background: none;
  outline: none;
  border: none;
  background: #ffd1ee;
  color: #ff44c4;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.1s background ease-in;
  &:hover {
    background: #ffbae6;
  }
`;
