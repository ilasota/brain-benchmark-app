const reactionReducer = (state = [], action) => {
  switch (action.type) {
    case "SUBMIT_REACTION":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default reactionReducer;
