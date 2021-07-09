import { createStoreHook, combineReducers, applyMiddleware } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-log";
import { posts } from "./posts";
import { prompts } from "./prompts";
import { user } from "./user";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      prompts,
      posts,
      user,
    }),
    applyMiddleware(thunk, logger)
  );
  return store;
};
