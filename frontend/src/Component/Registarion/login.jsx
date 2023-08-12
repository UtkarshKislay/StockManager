import React, { useState } from "react";
import "./Registraion.css";
import axios from "axios";
import { BiHide, BiShow } from "react-icons/bi";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState(0);
  const handleRegistarion = async (e) => {
    e.preventDefault();
    const form = e.target.elements;
    const userName = form.username.value;
    const password = form.password.value;
    try {
      const body = {
        userName,
        password,
      };
      const res = await axios({
        method: "POST",
        url: "http://localhost:5000/api/login",
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
  if (status !== 0) {
    setTimeout(() => {
      setStatus(0);
    }, 3000);
  }
  if (showPassword) {
    setTimeout(() => {
      setShowPassword(false);
    }, 2000);
  }
  return (
    <div className="registration-form-container">
      <h1>Login</h1>
      <form onSubmit={handleRegistarion} className="registration-form">
        <label htmlFor="username">UserName:</label>
        <input type="text" name="username" id="username" required />

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
                setShowPassword(1 - showPassword);
              }}
            />
          ) : (
            <BiShow
              className="hide-icons"
              onClick={() => {
                setShowPassword(1 - showPassword);
              }}
            />
          )}
        </div>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
