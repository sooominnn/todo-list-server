import React, { useReducer } from 'react';

const useLists = () => {
  const todos = [
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
  ];

  const todoReducer = (state, action) => {
    const nextId = Math.max(0, ...state.map((todo) => todo.id)) + 1;

    switch (action.type) {
      case 'ADD':
        // return state.concat({ id: nextId, ...action.payload });
        return state.concat({ id: nextId, ...action.todo });

      case 'REMOVE':
        return state.filter((todo) => todo.id !== action.id);

      case 'EDIT':
        return state.map((todo) =>
          todo.id === action.id ? { ...action } : todo
        );

      case 'CHECK':
        return state.map((todo) =>
          todo.id === action.id ? { ...todo, checked: !todo.checked } : todo
        );

      default:
        return state;
    }
  };

  const [todo, dispatch] = useReducer(todoReducer, todos);

  // const onAddTodo = (payload) => {
  //   return dispatcher({ type: 'ADD', payload });
  // };

  const onRemoveTodo = (payload) => {
    return dispatch({ type: 'REMOVE', payload });
  };

  // const dispatcher = { onAddTodo, onRemoveTodo };
  const dispatcher = { onRemoveTodo };

  return { todo, dispatch, dispatcher };
};

export default useLists;
