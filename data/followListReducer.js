const followListReducer = (state = [], action) => {
  switch (action.type) {
    case "SUBMIT_FOLLOW":
      return [...state, action.payload];
    case "UPDATE_FOLLOW":
      return [...action.payload];
    default:
      return state;
  }
};

export default followListReducer;
