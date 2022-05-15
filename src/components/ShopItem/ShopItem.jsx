import { useState, useContext } from 'react';
import { MdOutlineAddShoppingCart } from 'react-icons/md';
import { TiInputChecked } from 'react-icons/ti';

import { CartContext } from '../../contexts/CartContext';

import './ShopItem.scss';

const ShopItem = ({ id, name, imageUrl, price, product }) => {
  const [selected, setSelected] = useState(false);

  const { addItemToCart, removeItemFromCart, cartItems } = useContext(CartContext)

  const addProduct = () => {
    addItemToCart(product)
    setSelected(true)
  }

  const removeProduct = () => {
    removeItemFromCart(cartItems, id)
    setSelected(false)
  }

  return (
    <div className="shop__item-container">
      <div className="shop__item">
        {selected ? (
          <div className="selected">
            <TiInputChecked title="Remove from cart" onClick={removeProduct} />
          </div>
        ) : (
          <div className="shop__item-cart">
            <MdOutlineAddShoppingCart title="Add to cart" onClick={addProduct} />
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
