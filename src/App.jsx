import React, { useState, useRef } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/Todolist';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: '리액트 공부',
      content: 'useReducer 공부하기',
      checked: true,
    },
    {
      id: 2,
      title: '자바스크립트 공부',
      content: '조건문 공부하기',
      checked: true,
    },
    {
      id: 3,
      title: 'html&css 공부',
      content: '스타일 입히기 완료하기',
      checked: true,
    },
    {
      id: 4,
      title: '운동',
      content: '1시간 걷기',
      checked: true,
    },
    {
      id: 5,
      title: '독서',
      content: '어제 읽던 책 완독하기',
      checked: true,
    },
    {
      id: 6,
      title: '여행준비',
      content: '필요서류, 티켓 준비하기',
      checked: true,
    },
  ]);

  const nextId = useRef(7);

  const onInsert = (newTodo) => {
    const todo = {
      id: nextId.current,
      title: newTodo.title,
      content: newTodo.content,
      checked: false,
    };

    setTodos(todos.concat(todo));
    nextId.current += 1;
  };

  const onRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onUpdate = (todo) => {
    const target = todos.findIndex((currentTodo) => currentTodo.id === todo.id);
    const newTodos = [...todos];
    newTodos.splice(target, 1, todo);
    setTodos(newTodos);
  };

  const onToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList
        todos={todos}
        onRemove={onRemove}
        onUpdate={onUpdate}
        onToggle={onToggle}
      />
    </TodoTemplate>
  );
};

export default App;
