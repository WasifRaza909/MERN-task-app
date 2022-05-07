import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUserViaToken, registerUser } from "../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  const { name, email, password, confirmPassword } = formData;

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

    if (password !== confirmPassword) {
      console.log("Password do not matched");
      return;
    }

    dispatch(registerUser({ name, email, password }));

    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="home register">
      <div className="home-flex">
        <div className="home-flex-content">
          <div className="">
            <h1>Register Yourself</h1>
            <input
              value={name}
              onChange={onChangeHandler}
              type="text"
              name="name"
              placeholder="Enter name"
            />
            <input
              type="email"
              value={email}
              onChange={onChangeHandler}
              name="email"
              placeholder="Enter email"
            />
            <input
              value={password}
              onChange={onChangeHandler}
              type="password"
              name="password"
              placeholder="Enter password"
            />
            <input
              value={confirmPassword}
              onChange={onChangeHandler}
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
            />
            <div className="last-section">
              <button onClick={submitHandler}>Submit</button>
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
