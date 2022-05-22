import React from 'react';
import './Button.scss';

const Button = ({ title, color, onClick }) => {
  return (
    <div className="button">
      <button style={{ backgroundColor: color }} onClick={onClick}>{title}</button>
    </div>
  );
};

export default Button;
