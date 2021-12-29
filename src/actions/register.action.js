import axios from "axios";

export const registerUser = (user) => async (dispatch) => {
  dispatch({ type: "REGISTER_USER_REQUEST" });

  try {
    const response = await axios.post(
      "http://localhost:8000/api/user/register",
      user
    );
    console.log(response);
    dispatch({ type: "REGISTER_USER_SUCCESS" });
  } catch (error) {
    dispatch({ type: "REGISTER_USER_FAILED", payload: error });
  }
};
