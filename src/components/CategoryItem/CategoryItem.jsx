import React from "react";
import { Button } from "../../atoms";
import "./CategoryItem";

const CategoryItem = ({ id, title }) => {
  return (
    <div className="categories__container">
      <div key={id} className="category-container">
        <div className="detail-container">
          <h3>{title}</h3>
          <Button title="shop now" color="var(--secondary-color)" />
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
