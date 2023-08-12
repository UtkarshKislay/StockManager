import React, { useState } from "react";
import "./Registraion.css";
import axios from "axios";
import { BiHide, BiShow } from "react-icons/bi";
const Registraion = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [status,setStatus]=useState(0);
  const handleRegistarion = async (e) => {
    e.preventDefault();
    const form = e.target.elements;
    const userName = form.username.value;
    const password = form.password.value;
    const confirmPassword = form["confirm-password"].value;
    const email = form.email.value;
    const role=form.role.value;
    if (password !== confirmPassword) {
      console.log("Confirm password must be same as password");
      return;
    }
    try {
      const body = {
        userName,
        password,
        confirmPassword,
        email,
        role
      };

      const res = await axios({
        method: "POST",
        url: "http://localhost:5000/api/register",
        data: body,
        headers: {
          "Content-Type": "application/json", // Set the Content-Type header to JSON
        },
      });
      setStatus(res.status);
    } catch (err) {
      console.log("err on res ", err);
    }
  };
  if(status!==0){
    setTimeout(() => {
      setStatus(0);
    }, 3000);
  }
  if(showPassword){
    setTimeout(() => {
      setShowPassword(false);
    }, 2000);
  }
  return (
    <div className="registration-form-container">
      <h1>Registration</h1>
      <form onSubmit={handleRegistarion} className="registration-form">

      {status===200?(
        <div style={{color:"green",padding:"5px",fontSize:"1.1rem"}}>
          User Registered Successfully, can login now!
        </div>
      ): status===201?(
       <div style={{color:"red",padding:"5px",fontSize:"1.1rem"}}>
        User with this email already exist!
       </div>
      ):status===202?(
        <div style={{color:"red",padding:"5px",fontSize:"1.1rem"}}>
          This user name not exist! 
        </div>
      ):null}

        <label htmlFor="username">UserName:</label>
        <input type="text" name="username" id="username" required />
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" required />
        <label htmlFor="password">Password:</label>
        <div style={{ width: "100%" }} className="password-hide-icons">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            required
          />
          {!showPassword ? (
            <BiHide
              className="hide-icons"
              onClick={() => {
                setShowPassword(1-showPassword);
              }}
            />
          ) : (
            <BiShow
              className="hide-icons"
              onClick={() => {
                setShowPassword(1-showPassword);
              }}
            />
          )}
        </div>
        <div>
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input
            type="text"
            name="confirm-password"
            id="confirm-password"
            required
          />
        </div>
        <label htmlFor="role">Role:</label>
        <div className="role">
          <div>
            <input type="radio" id="customer" name="role" value="0" defaultChecked/>
            <label
              for="customer"
              style={{ marginLeft: "4px", fontSize: "1.1rem" }}
            >
              Customer
            </label>
          </div>
          <div>
            <input type="radio" id="seller" name="role" value="1"
           />
            <label
              for="seller"
              style={{ marginLeft: "4px", fontSize: "1.1rem" }}
            >
              Seller
            </label>
          </div>
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
      
    </div>
  );
};

export default Registraion;
