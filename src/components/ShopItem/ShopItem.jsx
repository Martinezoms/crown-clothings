import React, { useState } from 'react';
import { MdOutlineAddShoppingCart } from 'react-icons/md';
import { TiInputChecked } from 'react-icons/ti';
import './ShopItem.scss';

const ShopItem = ({ name, imageUrl, price }) => {
  const [selected, setSelected] = useState(false);
  return (
    <div className="shop__item-container">
      <div className="shop__item">
        {selected ? (
          <div className="shop__item-cart">
            <MdOutlineAddShoppingCart title="Add to cart" onClick={() => setSelected(false)} />
          </div>
        ) : (
          <div className="selected">
            <TiInputChecked title="Remove from cart" onClick={() => setSelected(true)} />
          </div>
        )}

        <div className="shop__item-image">
          <img src={imageUrl} alt="Product" />
        </div>
        <div className="shop__item-details">
          <p>{name}</p>
          <p>${price}</p>
        </div>
      </div>
    </div>
  );
};

export default ShopItem;
