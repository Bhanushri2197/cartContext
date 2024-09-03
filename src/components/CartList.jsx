import React , { useContext } from 'react'
import CartItem from './CartItem'
import  CartContext  from '../context/CartContext'

function CartList() {
  const { isOpen, toggleSidebar, cartItems, total } = useContext(CartContext);

  return (
    <div className={`cartContainer cartSidebar ${isOpen ? 'active' : ''}`}>
    <button className="closeBtnToggle" onClick={toggleSidebar}>x</button>
    <div className="cartItemsListed h-100">
      <h2 className='text-center'>Cart Items ({cartItems.length})</h2>
      <div className="itemsWrapper">
      <div className="cartItems">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      </div>
   
      <div className="totalPrice text-end">Total: $ {total.toFixed(2)}</div>
    </div>
  </div>

  )
}

export default CartList
