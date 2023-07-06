import React from "react";
import "./Header.css";
import Logo from "../../Assets/img/logonew.png";
const Header = () => {
  return (
    <div className="logo">
      <div className="logo-content">
        <img src={Logo} alt="companyLogo" className="logo-img" />
        <div className="title">
          <h1>Welcome to the Inventory Management System</h1>
          <p class="description">
            A robust solution for tracking stock levels, order fulfillment, and
            supplier management.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
