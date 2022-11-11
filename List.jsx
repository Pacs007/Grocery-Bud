import React from 'react';
import { BiEdit } from 'react-icons/Bi';
import { MdDelete } from 'react-icons/Md';

const List = ({ items, removeItem, editItem }) => {
  return (
    <div className='grocery-list'>
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article className='grocery-item' key={id}>
            <p className='title'>{title}</p>
            <div className='btn-container'>
              <button
                type='button'
                className='edit-btn'
                onClick={() => editItem(id)}
              >
                <BiEdit />
              </button>
              <button
                type='button'
                className='delete-btn'
                onClick={() => removeItem(id)}
              >
                <MdDelete />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;