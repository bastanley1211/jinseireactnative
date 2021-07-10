import * as ActionTypes from "./ActionTypes";

export const user = (
  state = { isLoading: true, errMess: null, user: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_USER:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        user: action.payload,
      };
    case ActionTypes.USER_LOADING:
      return { ...state, isLoading: true, user: [] };
    case ActionTypes.USER_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };
    case ActionTypes.EDIT_USER:
      return { ...state, user: [action.payload] };
    default:
      return state;
  }
};
