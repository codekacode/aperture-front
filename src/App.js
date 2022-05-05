import React, { useState, useEffect } from 'react';
import {Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Nav';
import { Products } from './components/Products/Products';
import { Home } from './pages/Home';
import commerceData from './Data/commerceData.js'
import Cart from './components/Cart/Cart';
import Product from './components/Products/Product/Product';

function App() {

  const [products, setProducts] = useState([])

  const addProducts = () => {
    const commerceDataFetch = commerceData
    setProducts(commerceDataFetch)
  }

  console.log(products)
  useEffect(() => {
    addProducts();
  }, [])

  console.log(products)
  
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/products' element={<Products products={products} />}/>
        <Route path='/product' element={<Product />}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </Router>
  );
}

export default App;
