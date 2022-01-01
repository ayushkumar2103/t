import { logoutUser } from "actions/login.action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cartReducer);
  const { user } = useSelector((state) => state.loginReducer);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-3 mb-5 bg-white rounded">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Pizzeria Uno
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {!user ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link " to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to="/register">
                    Register
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <div className="nav-link">
                    <strong>{user?.name}</strong>
                  </div>
                </li>
                <li className="nav-item">
                  <button
                    className="btn btn-danger"
                    onClick={() => dispatch(logoutUser())}
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                Cart {cartItems.length}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <style jsx>
        {`
          .navbar {
            box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;
