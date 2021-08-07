const userNameReducer = (state = "", action) => {
  switch (action.type) {
    case "SUBMIT_USERNAME":
      return (state = action.payload);
    default:
      return state;
  }
};

export default userNameReducer;
