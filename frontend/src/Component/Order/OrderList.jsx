import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    
  }, []);

  return (
    <div>
      <h2>Order List</h2>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {console.log(orders.length)}
          {(orders.length>0 && Array.isArray(orders)) ? (
            orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customer}</td>
                <td>{order.product}</td>
                <td>{order.quantity}</td>
                <td>[Edit]</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">Loading...</td>
            </tr>
          )}

          {/* {orders.map((order)=>{
            return <tr key={order.id}>
            <td>{order.id}</td>
            <td>{order.customer}</td>
            <td>{order.product}</td>
            <td>{order.quantity}</td>
            <td>[Edit]</td>
          </tr>
          })} */}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;
