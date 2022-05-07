import { useEffect, useState } from "react";
import { Link, Navigate, useNavigationType } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserViaToken, loginUser } from "../features/auth/authSlice";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  const { email, password } = formData;

  useEffect(() => {
    dispatch(getUserViaToken());

    if (user && user.name) {
      navigate("/");
    }
  }, [dispatch, user]);

  const onChangeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(loginUser({ email, password }));

    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <div className="home login">
      <div className="home-flex">
        <div className="home-flex-content">
          <div className="register">
            <h1>Login</h1>
            <input
              type="email"
              value={email}
              onChange={onChangeHandler}
              name="email"
              placeholder="Enter email"
            />
            <input
              type="password"
              value={password}
              onChange={onChangeHandler}
              name="password"
              placeholder="Enter password"
            />
            <div className="last-section">
              <button onClick={submitHandler}>Submit</button>
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
