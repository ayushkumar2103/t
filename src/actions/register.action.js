import axios from "axios";

export const registerUser = (user) => async (dispatch) => {
  dispatch({ type: "REGISTER_USER_REQUEST" });

  try {
    const request = await axios.post("http://localhost:/api/user/register", {
      user,
    });
    dispatch({ type: "REGISTER_USER_SUCCESS" });
  } catch (error) {
    dispatch({ type: "REGISTER_USER_FAILED", payload: error });
  }
};
