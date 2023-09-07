import React, { useState } from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
  MdEdit,
  MdCheck,
} from 'react-icons/md';

const TodoListItem = ({ todo, dispatch }) => {
  const { title, content, checked } = todo;

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
      ...value,
    });
  };

  const remove = () => {
    dispatch({
      type: 'REMOVE',
      id: todo.id,
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
          <input
            type='text'
            name='title'
            value={value.title}
            onChange={onChange}
          />
          <input
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
        <div>
          <div onClick={check}>
            {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          </div>
          <input type='text' value={title} onChange={onChange} />
          <input type='text' value={content} onChange={onChange} />
          <MdEdit onClick={() => setEditMode(true)} />
          <MdRemoveCircleOutline onClick={remove} />
        </div>
      )}
    </div>
  );
};

export default TodoListItem;
