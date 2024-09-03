import React, { useContext } from 'react';
import  CartContext  from '../context/CartContext'

const CartToggleButton = () => {
  const { toggleSidebar , cartItems } = useContext(CartContext);

  return <button className="btn btnCart" onClick={toggleSidebar}>Cart ( {cartItems.length} )</button>;
};

export default CartToggleButton;
