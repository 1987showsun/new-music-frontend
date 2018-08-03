import { combineReducers } from "redux";

//import reducer
import hmoe from './home';
import list from './list';
import info from './info';

export default combineReducers({
  list,
  info,
  hmoe
})
