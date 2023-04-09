import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login-img"
          src="https://marcas-logos.net/wp-content/uploads/2020/01/Amazon-Logo-1-2048x1279.png"
        />
      </Link>
      <div className="login-info">
        <h1>Sign-in</h1>
        <form>
          <h5>Email</h5>
          <input type="text" />
          <h5>Password</h5>
          <input type="password" />
          <button className="signin-btn">Sign button</button>
        </form>
        <p>
          By signing-in, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <button className="signup-btn">Create your amazon account</button>
      </div>
    </div>
  );
}

export default Login;
