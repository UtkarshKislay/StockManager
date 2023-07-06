import React from "react";
import "./Home.css";
import logo from "../../Assets/img/logonew.png";
const Home = () => {
  return (
    <div className="homePage"> 
      <img src={logo} alt="" />
      <p>
        Welcome to our inventory management system. We provide a comprehensive
        solution for tracking and managing your products, orders, and suppliers.
      </p>
    </div>
  );
};

export default Home;
