import * as ActionTypes from "./ActionTypes";

export const posts = (
  state = { isLoading: true, errMess: null, posts: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_POSTS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        posts: action.payload,
      };

    case ActionTypes.POSTS_LOADING:
      return { ...state, isLoading: true, errMess: null, posts: [] };

    case ActionTypes.POSTS_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

    case ActionTypes.ADD_POST:
      const post = action.payload;
      post.id = state.posts.length;
      return { ...state, posts: state.posts.concat(post) };

    default:
      return state;
  }
};
