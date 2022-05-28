import React from 'react'
import {
    Routes,
    Route,
  } from "react-router-dom";
import App from '../App';
import Product from './Product';
import ProductDetail from './ProductDetail';

function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<h1>Home</h1>}/>
            <Route path='/products' element={<Product/>}/>
            <Route path='/products/:id' element={<ProductDetail/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes