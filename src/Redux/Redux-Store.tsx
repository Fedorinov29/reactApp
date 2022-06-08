import { combineReducers, legacy_createStore } from "redux";
import dialogsReducer from "./Dialogs-reducer";
import profileReducer from "./Profile-reducer";
import sideBarReducer from "./SideBar-reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sideBar: sideBarReducer,
});

const store = legacy_createStore(reducers);

export default store;
