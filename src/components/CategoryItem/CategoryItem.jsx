import React from 'react';
import { Button } from '../../atoms';
import './CategoryItem.scss';

const CategoryItem = ({ id, title, imageUrl }) => {
  return (
    <div key={id} className="category-container">
      <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="detail-container">
        <h3>{title}</h3>
        <Button title="shop now" color="var(--secondary-color)" />
      </div>
    </div>
  );
};

export default CategoryItem;
