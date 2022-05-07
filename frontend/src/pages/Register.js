import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="home register">
      <div className="home-flex">
        <div className="home-flex-content">
          <div className="">
            <h1>Register Yourself</h1>
            <input type="text" name="text" placeholder="Enter name" />
            <input type="email" name="text" placeholder="Enter email" />
            <input type="password" name="text" placeholder="Enter password" />
            <input type="password" name="text" placeholder="Confirm password" />
            <div className="last-section">
              <button>Submit</button>
              <p>
                Already have an account ? <Link to="/login">Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
