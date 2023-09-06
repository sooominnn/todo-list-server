import React, { useState } from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
  MdEdit,
} from 'react-icons/md';

const TodoListItem = ({ todo, onRemove, onUpdate, onToggle }) => {
  const { id, title, content, checked } = todo;

  const [editMode, setEditMode] = useState(false);

  const [value, setValue] = useState(
    todo || { id: '', title: '', content: '' }
  );

  const onChange = (e) => {
    // input값 변화 감지
    const text = e.target.value;
    const name = e.target.name;

    setValue({ ...value, [name]: text });
    // 기존 value 객체 복사한 뒤 name이라는 키를 가진 값을 text로 설정한다는 의미.
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
          <button
            onClick={() => {
              onUpdate(value);
              setEditMode(false);
            }}
          >
            완료
          </button>
        </ul>
      ) : (
        <div>
          <div onClick={() => onToggle(id)}>
            {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
            <input type='text' value={title} onChange={onChange} />
            <input type='text' value={content} onChange={onChange} />
            <MdEdit onClick={() => setEditMode(true)} />
            <MdRemoveCircleOutline onClick={() => onRemove(id)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoListItem;
