import { combineReducers, legacy_createStore as createStore } from "redux";
import reducer from "./reducer/basketReducer";

const rootReducer = combineReducers({
  basket: reducer,
});

export const store = createStore(rootReducer);
