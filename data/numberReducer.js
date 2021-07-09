const numberReducer = (state = [], action) => {
  switch (action.type) {
    case "SUBMIT_NUMBER":
      return [...state, action.payload];
    case "UPDATE_NUMBER":
      return [...action.payload];
    default:
      return state;
  }
};

export default numberReducer;
