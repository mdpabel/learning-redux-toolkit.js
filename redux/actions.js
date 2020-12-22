import * as actionsTypes from "../01_fundamentals/actionTypes.js";

export const bugAdded = (description) => {
  return {
    type: actionsTypes.BUG_ADDED,
    payload: {
      description: description,
    },
  };
};

export const bugRemoved = () => {
  return {
    type: actionsTypes.BUG_REMOVED,
    payload: {
      id: 1,
    },
  };
};

export const bugResolved = (id) => {
  return {
    type: actionsTypes.BUG_RESOLVED,
    payload: {
      id,
    },
  };
};
