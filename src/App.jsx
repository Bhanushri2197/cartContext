import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import { useState } from 'react'

import './App.css'
import CartList from './components/CartList'
import ProductList from "./components/ProductList";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ProductList/>
    </>
  )
}

export default App
