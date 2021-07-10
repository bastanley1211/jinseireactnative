import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";

//PROMPTS config

export const fetchPrompts = () => (dispatch) => {
  dispatch(promptsLoading());

  return fetch(baseUrl + "prompts")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(
            `Error ${response.status}: ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        const errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then((response) => response.json())
    .then((prompts) => dispatch(addPrompts(prompts)))
    .catch((error) => dispatch(promptsFailed(error.message)));
};

export const promptsFailed = (errMess) => ({
  type: ActionTypes.PROMPTS_FAILED,
  payload: errMess,
});

export const promptsLoading = () => ({
  type: ActionTypes.PROMPTS_LOADING,
});

export const addPrompts = (prompts) => ({
  type: ActionTypes.ADD_PROMPTS,
  payload: prompts,
});

//POSTS config

export const fetchPosts = () => (dispatch) => {
  dispatch(postsLoading());

  return fetch(baseUrl + "posts")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(
            `Error ${response.status}: ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        const errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then((response) => response.json())
    .then((posts) => dispatch(addPosts(posts)))
    .catch((error) => dispatch(postsFailed(error.message)));
};

export const postsFailed = (errMess) => ({
  type: ActionTypes.POSTS_FAILED,
  payload: errMess,
});

export const postsLoading = () => ({
  type: ActionTypes.POSTS_LOADING,
});

export const addPosts = (posts) => ({
  type: ActionTypes.ADD_POSTS,
  payload: posts,
});

//USER data config

export const fetchUser = () => (dispatch) => {
  dispatch(userLoading());

  return fetch(baseUrl + "user")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(
            `Error ${response.status}: ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        const errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then((response) => response.json())
    .then((user) => dispatch(addUser(user)))
    .catch((error) => dispatch(userFailed(error.message)));
};

export const userFailed = (errMess) => ({
  type: ActionTypes.USER_FAILED,
  payload: errMess,
});

export const userLoading = () => ({
  type: ActionTypes.USER_LOADING,
});

export const addUser = (user) => ({
  type: ActionTypes.ADD_USER,
  payload: user,
});

export const updateUser =
  (firstname, lastname, age, email, password) => (dispatch) => {
    const updatedUser = {
      firstname,
      lastname,
      age,
      email,
      password,
    };

    setTimeout(() => {
      dispatch(editUser(updatedUser));
    }, 2000);
  };

export const editUser = (user) => ({
  type: ActionTypes.EDIT_USER,
  payload: user,
});

export const createPost = (date, typeTitle, text) => (dispatch) => {
  const newPost = {
    date,
    typeTitle,
    text,
  };
  newPost.date = new Date().toLocaleDateString("en-US");

  setTimeout(() => {
    dispatch(addPost(newPost));
  }, 2000);
};

export const addPost = (post) => ({
  type: ActionTypes.ADD_POST,
  payload: post,
});
