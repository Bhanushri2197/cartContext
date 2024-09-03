import React, { useEffect, useState ,useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import data from '../assets/products.json';
import ProductItem from './ProductItem';
import CartList from './CartList';
import { CartProvider } from '../context/CartContext'
import CartToggleButton from './CartToggleBtn';
import CartContext from '../context/CartContext';

function ProductList() {
  const [products, setProducts] = useState([]);
  const { isOpen , toggleSidebar } = useContext(CartContext);

  useEffect(() => {
    setProducts(data.products);
  }, []);

  return (
    <CartProvider>
      <div className="cartBody">
        <div className="headerNav ">
          <div className="container d-flex align-items-center justify-content-between">
            <h1 className="title">Shopping Cart</h1>
           <CartToggleButton/>
          </div>
        </div>
        <CartList />
      
        <div className={`sidebar-overlay ${isOpen == true ? 'active' : ''}`} onClick={toggleSidebar}></div>
        <div className="cartListBlok">
          {products.map((item) => (
            <ProductItem key={item.id} items={item} />
          ))}
        </div>
      </div>
      <ToastContainer />
    </CartProvider>
  );
}

export default ProductList;
