import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "actions/cart.action";

import "../styles/CartScreen.style.css";
import Stripecheckout from "components/StripeCheckout";

const CartScreen = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cartReducer);
  var subtotal = cartItems.reduce(
    (finalAmount, item) => finalAmount + item.price,
    0
  );
  return (
    <div className="cart-screen container">
      <div className="row">
        <div className="col-md-6">
          <h1>My Cart</h1>
          {cartItems.length === 0 && (
            <h4 className="my-2">No items in the cart!</h4>
          )}
          {cartItems.map((cartItem) => (
            <div key={cartItem._id}>
              <hr />
              <div className="cart-item">
                <div key={cartItem._id}>
                  <h4>
                    {cartItem.name}[{cartItem.variant}]
                  </h4>
                  <p>
                    Price: {cartItem.quantity} * {"₹ "}
                    {cartItem.prices[0][cartItem.variant]} ={"₹ "}
                    {cartItem.price}
                  </p>
                  <p>
                    Quantity:{" "}
                    {cartItem.quantity <= 9 && (
                      <i
                        className="fa fa-plus"
                        aria-hidden="true"
                        onClick={() =>
                          dispatch(
                            addToCart(
                              cartItem,
                              cartItem.quantity + 1,
                              cartItem.variant
                            )
                          )
                        }
                      ></i>
                    )}
                    {cartItem.quantity}
                    {cartItem.quantity >= 2 && (
                      <i
                        className="fa fa-minus"
                        aria-hidden="true"
                        onClick={() =>
                          dispatch(
                            addToCart(
                              cartItem,
                              cartItem.quantity - 1,
                              cartItem.variant
                            )
                          )
                        }
                      ></i>
                    )}
                  </p>
                </div>
                <div>
                  <img
                    src={cartItem.image}
                    alt={cartItem.name}
                    className="img-fluid cart-image-item"
                  />
                  <button
                    className="mx-1 btn btn-danger"
                    onClick={() => dispatch(deleteFromCart(cartItem))}
                  >
                    <i className="fa fa-trash" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-6 text-center">
          <h2>
            Subtotal: <strong>₹{subtotal}</strong> /-
          </h2>
          <Stripecheckout amount={subtotal} />
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
