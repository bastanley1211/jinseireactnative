import * as ActionTypes from "./ActionTypes";

export const prompts = (
  state = { isLoading: true, errMess: null, prompts: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_PROMPTS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        prompts: action.payload,
      };
    case ActionTypes.PROMPTS_LOADING:
      return { ...state, isLoading: true, errMess: null, prompts: [] };
    case ActionTypes.PROMPTS_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };
    default:
      return state;
  }
};
