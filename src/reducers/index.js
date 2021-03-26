import { combineReducers } from "redux";

import usersReducer from "./usersReducer";
import userReducer from "./userReducer";
import formReducer from "./formReducer";

export default combineReducers({
  users: usersReducer,
  user: userReducer,
  form: formReducer,
});
