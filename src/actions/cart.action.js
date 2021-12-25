export const addToCart = (pizza, quantity, variant) => (dispatch, getItems) => {
  const cartItems = {
    _id: pizza._id,
    name: pizza.name,
    image: pizza.image,
    variant: variant,
    quantity: quantity,
    price: pizza.price,
    prices: pizza.prices[0][variant] * quantity,
  };

  dispatch({ type: "ADD_TO_CART", payload: cartItems });

  const CartItems = getItems().cartReducer.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(CartItems));
};
