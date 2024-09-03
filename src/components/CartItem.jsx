import React , { useContext } from 'react'
import  CartContext  from '../context/CartContext'


function CartItem({item}) {
    const { increaseQuantity, decreaseQuantity, removeItem ,notifyRemovedFromCart } = useContext(CartContext);
  return (
    <div className='addedcartItems'>
    <div className="d-flex">
      <div className="imgBlock">
        <img className='w-100' src={item.image} alt={item.title} />
      </div>
      <div className="additemDetailBlock w-100 d-flex justify-content-between">
        <div className="itemsDetail">
          <div className='titleText'>{item.title}</div>
          <div className="rating">&#9733; {item.rating.rate}</div>
          <div className='categoryText'>Category : {item.category}</div>
          <p className="description">{item.description}</p>
        </div>
        <div className="priceBlock d-flex flex-column align-items-center justify-content-between">
          <div className="priceDetail">
            <div className="d-flex align-items-center quantityBlock">
              <button className="btn dec" onClick={() => decreaseQuantity(item.id)}>-</button>
              <span className="quantity">{item.quantity}</span>
              <button className="btn btnInc" onClick={() => increaseQuantity(item.id)}>+</button>
            </div>
          </div>
          <div className="price">$ {item.price}</div>
          <button className=" btn btnRemove" onClick={() =>{
            removeItem(item.id);
            notifyRemovedFromCart(item)
          }}>Remove</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CartItem
