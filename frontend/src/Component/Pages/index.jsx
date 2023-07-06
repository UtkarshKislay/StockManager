import React from 'react'
import { Route, Routes, Link } from "react-router-dom";
import Order from "../Order/Order";
import Products from "../Products/Products";
import Suppliers from "../Suppliers/Suppliers";
import Home from '../HomePage/Home';
const Index = () => {
  return (
    <div>
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<Order />} />
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path='/' element={<Home/>}/>
        </Routes>
    </div>
  )
}

export default Index