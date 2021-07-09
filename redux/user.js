import * as ActionTypes from "./ActionTypes";

export const user = (
  state = { isLoading: true, errMess: null, user: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.USER_LOADING:
      return { ...state, isLoading: true, user: [] };
    case ActionTypes.USER_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };
    default:
      return state;
  }
};
