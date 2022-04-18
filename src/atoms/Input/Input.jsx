import React from 'react';
import './Input.scss';

const Input = ({ type, color, placeholder, name, value, required, onChange }) => {
  return (
    <div className="input">
      <input
        type={type}
        name={name || ''}
        value={value}
        style={{ backgroundColor: color || '' }}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
