import thunk from "redux-thunk";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";
import enhancer from "./storeEnhancer";
import middleware from "./middleware";

export default globalReducers => (preloadedState, extraArgument) =>
  createStore(
    globalReducers
      ? combineReducers(globalReducers)
      : () => preloadedState || {},
    preloadedState,
    composeWithDevTools(
      applyMiddleware(thunk.withExtraArgument(extraArgument), middleware),
      enhancer(globalReducers)
    )
  );
