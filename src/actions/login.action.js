import axios from "axios";

export const loginUser = (user) => async (dispatch) => {
  dispatch({ type: "LOGIN_USER_REQUEST" });
  try {
    const response = await axios.post(
      "http://localhost:8000/api/user/login",
      user
    );
    dispatch({
      type: "LOGIN_USER_SUCCESS",
      payload: { ...response.data, token: undefined },
    });
    localStorage.setItem("token", response.data.token);
  } catch (error) {
    dispatch({ type: "LOGIN_USER_FAILED", payload: error });
  }
};

export const checkUserLoggedIn = () => async (dispatch) => {
  dispatch({ type: "LOGIN_USER_REQUEST" });
  try {
    const response = await axios.get("http://localhost:8000/api/user/me", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    dispatch({
      type: "LOGIN_USER_SUCCESS",
      payload: { ...response.data, token: undefined },
    });
  } catch (error) {
    dispatch({ type: "LOGIN_USER_FAILED", payload: error });
  }
};
