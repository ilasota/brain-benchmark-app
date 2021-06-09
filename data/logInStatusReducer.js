const logInStatusReducer = (state = "notLoggedIn", action) => {
  switch (action.type) {
    case "LOGIN_STATUS":
      return (state = action.payload);
    default:
      return state;
  }
};

export default logInStatusReducer;
