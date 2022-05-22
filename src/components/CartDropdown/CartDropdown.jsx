import { useContext } from 'react';

import { Button } from '../../atoms/index';
import CartItem from '../CartItem/CartItem';

import { CartContext } from '../../contexts/CartContext';

import './CartDropdown.scss';

const CartDropdown = () => {

  const { cartItems } = useContext(CartContext)

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length > 0 ? cartItems.map(item => (<CartItem key={item.id} {...item} />)) : <h3 className='empty-message'>bscbu</h3>}
      </div>
      <Button title="Go to checkout" color="inherit" className="checkout-btn" />
    </div>
  );
};

export default CartDropdown;
