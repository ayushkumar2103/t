import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { getAllPizzasReducer } from "./reducers/pizza.reducer";

const composeEnhancers = composeWithDevTools({});

const combinedReducer = combineReducers({
  getAllPizzasReducer,
});

const initialState = {};

const store = createStore(
  combinedReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
