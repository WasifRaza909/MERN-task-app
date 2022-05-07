import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="home login">
      <div className="home-flex">
        <div className="home-flex-content">
          <div className="register">
            <h1>Login</h1>
            <input type="email" name="text" placeholder="Enter email" />
            <input type="password" name="text" placeholder="Enter password" />
            <div className="last-section">
              <button>Submit</button>
              <p>
                Don't have an account ? <Link to="/register">Register</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
