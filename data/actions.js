export const numberSubmit = (score) => {
  return {
    type: "SUBMIT_NUMBER",
    payload: score,
  };
};

export const numberUpdate = (score) => {
  return {
    type: "UPDATE_NUMBER",
    payload: score,
  };
};

export const reactionSubmit = (score) => {
  return {
    type: "SUBMIT_REACTION",
    payload: score,
  };
};

export const reactionUpdate = (score) => {
  return {
    type: "UPDATE_REACTION",
    payload: score,
  };
};

export const speedSubmit = (score) => {
  return {
    type: "SUBMIT_SPEED",
    payload: score,
  };
};

export const speedUpdate = (score) => {
  return {
    type: "UPDATE_SPEED",
    payload: score,
  };
};

export const chimpSubmit = (score) => {
  return {
    type: "SUBMIT_CHIMP",
    payload: score,
  };
};

export const chimpUpdate = (score) => {
  return {
    type: "UPDATE_CHIMP",
    payload: score,
  };
};

export const loginStatus = (status) => {
  return {
    type: "LOGIN_STATUS",
    payload: status,
  };
};

export const userNameSubmit = (status) => {
  return {
    type: "SUBMIT_USERNAME",
    payload: status,
  };
};
