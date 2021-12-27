export const addToCart = (pizza, quantity, variant) => (dispatch, getItems) => {
  const cartItems = {
    _id: pizza._id,
    name: pizza.name,
    image: pizza.image,
    variant: variant,
    quantity: quantity,
    price: pizza.prices[0][variant] * quantity,
    prices: pizza.prices,
  };

  dispatch({ type: "ADD_TO_CART", payload: cartItems });

  const CartItems = getItems().cartReducer.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(CartItems));
};

export const deleteFromCart = (pizza) => (dispatch, getItems) => {
  dispatch({ type: "DELETE_FROM_CART", payload: pizza }); // remove from state

  // get items from state
  const CartItems = getItems().cartReducer.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(CartItems));
};
