import axios from "axios";

export const placeOrder = (token, subtotal) => async (dispatch, getState) => {
  dispatch({ type: "PLACE_ORDER_REQUEST" });

  const currentUser = getState().loginReducer.user;
  const cartItems = getState().cartReducer.cartItems;

  try {
    const response = await axios.post(
      `http://localhost:8000/api/order/placeorder`,
      { token, subtotal, currentUser, cartItems }
    );

    console.log(response);
    dispatch({ type: "PLACE_ORDER_SUCCESS" });
  } catch (err) {
    dispatch({ type: "PLACE_ORDER_FAILED" });
  }
};
