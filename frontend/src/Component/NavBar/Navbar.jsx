import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-content">
        <nav className="nav-elements">
          <ul>
          <li>
              <Link className="link" to="/">Home</Link>
            </li>
            <li>
              <Link className="link" to="/products">Products</Link>
            </li>
            <li>
              <Link className="link" to="/orders">Orders</Link>
            </li>
            <li>
              <Link className="link" to="/suppliers">Suppliers</Link>
            </li>
   
          </ul>
        </nav>
        
      </div>
    </div>
  );
};

export default Navbar;
