import { useSelector } from "react-redux";

const Navbar = () => {
  const { cartItems } = useSelector((state) => state.cartReducer);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow p-3 mb-5 bg-white rounded">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Pizzeria Uno
        </a>
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
            <li className="nav-item">
              <a className="nav-link " href="/login">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/cart">
                Cart {cartItems.length}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
