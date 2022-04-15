import React from 'react';
import './Button.scss';

const Button = ({ title, color }) => {
  return (
    <div className="button">
      <button style={{ backgroundColor: color }}>{title}</button>
    </div>
  );
};

export default Button;
