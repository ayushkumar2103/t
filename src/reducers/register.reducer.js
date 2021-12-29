export const registerReducer = (state = {}, action) => {
  switch (action.type) {
    case "REGISTER_USER_REQUEST":
      return {
        loading: true,
      };
    case "REGISTER_USER_SUCCESS":
      return {
        loading: false,
        success: true,
      };
    case "REGISTER_USER_FAILED":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
