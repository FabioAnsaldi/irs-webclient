import { combineReducers } from "redux";

import mainReducer from "../theme/reducers/mainReducer";

const rootReducer = combineReducers({
  main: mainReducer
});

export default rootReducer;