import { createStore } from "redux";
import { editorReducer } from "./reducer";

const store = createStore(editorReducer);

export default store;
