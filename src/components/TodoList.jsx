import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({ todo, dispatch }) => {
  return (
    <div>
      {todo?.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} dispatch={dispatch} />
      ))}
    </div>
  );
};

export default TodoList;
