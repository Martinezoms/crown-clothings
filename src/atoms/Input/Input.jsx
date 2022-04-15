import React from 'react';
import './Input.scss';

const Input = ({ type, color, placeholder }) => {
  return (
    <div className="input">
      <input type={type} style={{ backgroundColor: color }} placeholder={placeholder} />
    </div>
  );
};

export default Input;
