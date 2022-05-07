import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { logout } from "../features/auth/authSlice";

function Navbar() {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  return (
    <nav className="navbar">
      <div className="nav-flex">
        <Link to="/" className="logo nav-flex-left">
          T
        </Link>

        <ul className="nav-flex-right">
          {user && user.name ? (
            <>
              <li>{user.name}</li>
              <li>
                <Link onClick={() => dispatch(logout())} to="#">
                  Logout
                </Link>
              </li>
            </>
          ) : (
            <li>
              <Link to="/register">Register</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
