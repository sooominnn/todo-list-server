import React from 'react';

import TodoTemplate from '../components/TodoTemplate';
import TodoInsert from '../components/TodoInsert';
import TodoList from '../components/Todolist';

export default function Home({ todo, dispatch }) {
  return (
    <TodoTemplate>
      <TodoInsert dispatch={dispatch} />
      <TodoList todo={todo} dispatch={dispatch} />
    </TodoTemplate>
  );
}
