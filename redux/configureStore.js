import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
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
