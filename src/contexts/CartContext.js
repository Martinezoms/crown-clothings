import { createContext, useState } from 'react';

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {}
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  const removeItemFromCart = (cartItems, id) => {
    // Removing selected item from cartItems array
    const filter = cartItems.filter((item) => item.id !== id);
    setCartItems(filter);
  };

  const value = { isCartOpen, setIsCartOpen, cartItems, setCartItems, addItemToCart, removeItemFromCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
