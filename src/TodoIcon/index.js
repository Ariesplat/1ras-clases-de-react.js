import React from 'react';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import { FaRegTrashAlt } from 'react-icons/fa';
import './TodoIcon.css';

const iconTypes = {
    "check": color => (
        <IoCheckmarkCircleOutline className="Icon-svg Icon-svg--check" fill={color} />
    ),
    "delete": color => (
        <FaRegTrashAlt className="Icon-svg Icon-svg--delete" fill={color} />
    ), 
};

function TodoIcon({ type, color = 'gray', onclick }) {
  return (
      <span
      className={ `Icon-container icon-container--${type}` }
      onclick={onclick}
       >
       { iconTypes[type] }
      </span>
  );
}
export { TodoIcon };