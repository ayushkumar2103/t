import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "actions/cart.action";

import "../styles/CartScreen.style.css";

const CartScreen = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cartReducer);
  return (
    <div className="cart-screen container">
      <h1>My Cart</h1>
      <div className="row">
        <div className="col-md-6">
          {cartItems.length === 0 && (
            <h4 className="my-2">No items in the cart!</h4>
          )}
          {cartItems.map((cartItem) => (
            <>
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
                        class="fa fa-plus"
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
                        class="fa fa-minus"
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
