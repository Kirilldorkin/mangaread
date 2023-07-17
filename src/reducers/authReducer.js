const initialState = {
  user: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNUP_SUCCESS":
      return {
        ...state,
        user: action.payload,
        error: null,
      };
    case "SIGNUP_ERROR":
      return {
        ...state,
        user: null,
        error: action.payload,
      };
    case "SIGNIN_SUCCESS":
      return {
        ...state,
        user: action.payload,
        error: null,
      };
    case "SIGNIN_ERROR":
      return {
        ...state,
        user: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
