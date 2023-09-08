import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';

import TodoListItem from './TodoListItem';

const TodoList = ({ todo, dispatch }) => {
  const [todos, setTodos] = useState([{ id: 1 }]);

  useEffect(() => {
    const getTodos = () => {
      const data = fetch('http://localhost:3003/todos')
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          setTodos(res);
        });
      return data;
    };
    getTodos();
  }, []);

  return (
    <TodoListContainer>
      {todo.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} dispatch={dispatch} />
      ))}
    </TodoListContainer>
  );
};

export default TodoList;

const TodoListContainer = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
`;
