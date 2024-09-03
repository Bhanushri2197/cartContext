import React , { useContext }  from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  CartContext  from '../context/CartContext'


function ProductItem({ items }) {
  const { addToCart ,notifyAddedToCart} = useContext(CartContext);

  return (
    <div className='cardItems'>
      <div className="imgBlock">
        <img src={items.image} alt={items.title} />
      </div>
      <div className="itemsDetailBlock">
        <div className='d-flex align-items-center justify-content-center flex-column'>
          <div className='titleText text-center'>{items.title}</div>
          <div className='price'>$ {items.price}</div>
        </div>
        <button className="btn addToCartBtn" onClick={() => {addToCart(items); notifyAddedToCart(items);}}>
          Add to Cart
        </button>
        <div className="rating">&#9733; {items.rating.rate}</div>
      </div>
    </div>
  );
}

export default ProductItem;
