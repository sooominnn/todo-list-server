import React from 'react';

const TodoTemplate = ({ children }) => {
  return (
    <div>
      <div>Todo List</div>
      <div>{children}</div>
    </div>
  );
};

export default TodoTemplate;
