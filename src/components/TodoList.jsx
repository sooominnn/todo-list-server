import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, onRemove, onUpdate, onToggle }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onUpdate={onUpdate}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default TodoList;
