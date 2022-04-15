import React from 'react';
import './ButtonWithIcon.scss';

const ButtonWithIcon = ({ img, title }) => {
  return (
    <div className="button-with-icon">
      <div className="items">
        <div className="icon">
          <img src={img} alt="" />
        </div>
        <div>
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default ButtonWithIcon;
