import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { getAllPizzasReducer } from "./reducers/pizza.reducer";
import { cartReducer } from "reducers/cart.reducer";

const composeEnhancers = composeWithDevTools({});

const combinedReducer = combineReducers({
  getAllPizzasReducer,
  cartReducer,
});

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const initialState = {
  cartReducer: {
    cartItems,
  },
};

const store = createStore(
  combinedReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
