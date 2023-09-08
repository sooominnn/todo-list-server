import React, { useState } from 'react';
import { styled } from 'styled-components';

import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
  MdEdit,
  MdCheck,
} from 'react-icons/md';

const TodoListItem = ({ todo, dispatch }) => {
  const { id, title, content, checked } = todo;

  const [editMode, setEditMode] = useState(false);

  const [value, setValue] = useState(
    todo || { id: '', title: '', content: '' }
  );

  const onChange = (e) => {
    const text = e.target.value;
    const name = e.target.name;

    setValue({ ...value, [name]: text });
  };

  const update = () => {
    dispatch({
      type: 'EDIT',
      // id,
      ...value,
    });
  };

  // const remove = () => {
  //   dispatch({
  //     type: 'REMOVE',
  //     id: todo.id,
  //   });
  // };

  const remove = () => {
    // JSON Server에서 데이터 삭4제하기 위해 DELETE 요청
    fetch(`http://localhost:5177/todos/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.status === 200) {
          // 삭제 성공 시 Todo 항목을 삭제
          dispatch({
            type: 'REMOVE',
            id,
          });
        }
      })
      .catch((error) => {
        console.error('삭제 중 오류 발생: ', error);
      });
  };

  const check = () => {
    dispatch({
      type: 'CHECK',
      id: todo.id,
    });
  };

  return (
    <div>
      {editMode ? (
        <ul>
          <TodoListItemInput
            type='text'
            name='title'
            value={value.title}
            onChange={onChange}
          />
          <TodoListItemInput
            type='text'
            name='content'
            value={value.content}
            onChange={onChange}
          />
          <MdCheck
            onClick={() => {
              update(value);
              setEditMode(false);
            }}
          />
        </ul>
      ) : (
        <TodoListItemContainer>
          <TodoListItemContainerCheckBox onClick={check}>
            <MdCheckBoxStyle>
              {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
            </MdCheckBoxStyle>
          </TodoListItemContainerCheckBox>
          <TodoListItemInput type='text' value={title} onChange={onChange} />
          <TodoListItemInput type='text' value={content} onChange={onChange} />
          <MdEdit onClick={() => setEditMode(true)} />
          <TodoListItemRemove>
            <MdRemoveCircleOutline onClick={remove} />
          </TodoListItemRemove>
        </TodoListItemContainer>
      )}
    </div>
  );
};

export default TodoListItem;

const TodoListItemContainer = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
`;

const TodoListItemContainerCheckBox = styled.div`
  cursor: pointer;
  flex: 1; // 차지할 수 있는 영역 모두 차지
  display: flex;
  align-items: center;
  svg {
    font-size: 1.5rem;
  }
  margin-left: 0.5rem;
`;

const TodoListItemRemove = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #ff44c4;
  cursor: pointer;
  margin-left: 0.5rem;
`;

const TodoListItemInput = styled.input`
  background: none;
  outline: none;
  border: none;
  margin-right: 3rem;
  flex: 1;
`;

const MdCheckBoxStyle = styled.div`
  svg {
    color: ${(props) => (props.checked ? '#adb5bd' : '#ff44c4')};
  }
`;
