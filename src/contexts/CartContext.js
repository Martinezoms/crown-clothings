import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    setCartCount(cartItems.length);
  }, [cartItems]);

  const addItemToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  const removeItemFromCart = (cartItems, id) => {
    // Removing selected item from cartItems array
    const filter = cartItems.filter((item) => item.id !== id);
    setCartItems(filter);
  };

  const value = { isCartOpen, setIsCartOpen, cartItems, setCartItems, addItemToCart, removeItemFromCart, cartCount };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
