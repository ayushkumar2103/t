export const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN_USER_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "LOGIN_USER_SUCCESS":
      return {
        ...state,
        user: action.payload,
        loading: false,
        success: true,
      };
    case "LOGIN_USER_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
