import { useSelector } from "react-redux";

import "../styles/CartScreen.style.css";

const CartScreen = () => {
  const { cartItems } = useSelector((state) => state.cartReducer);
  return (
    <div className="cart-screen container">
      <h1>My Cart</h1>
      <div className="row">
        <div className="col-md-6">
          {cartItems.map((cartItem) => (
            <>
              <hr />
              <div className="cart-item">
                <div key={cartItem._id}>
                  <h4>{cartItem.name}</h4>
                  <p>
                    Price: {cartItem.quantity} * {"₹ "}
                    {cartItem.price} ={"₹ "}
                    {cartItem.prices}
                  </p>
                  <p>
                    Quantity: <i class="fa fa-plus" aria-hidden="true"></i>
                    {cartItem.quantity}
                    <i class="fa fa-minus" aria-hidden="true"></i>
                  </p>
                </div>
                <div>
                  <img
                    src={cartItem.image}
                    alt={cartItem.name}
                    className="img-fluid cart-image-item"
                  />
                  <button className="mx-1 btn btn-danger">
                    <i class="fa fa-trash" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
