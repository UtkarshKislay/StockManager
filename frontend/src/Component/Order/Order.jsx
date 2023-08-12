import React, { useState } from 'react'
import './Order.css';
import OrderList from './OrderList';
import Registraion from '../Registarion/Registraion';
const Order = () => {
  const [isRegistered,setIsRegistred]=useState(false);
  return (
    <div className='order'>
      <div className="order-content">
        
      </div>
    </div>
  )
}

export default Order