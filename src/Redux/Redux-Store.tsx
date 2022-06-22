import { combineReducers, legacy_createStore } from "redux";
import dialogsReducer from "./Dialogs-reducer";
import profileReducer from "./Profile-reducer";
import sideBarReducer from "./SideBar-reducer";
import UsersReducer from "./Users-reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sideBar: sideBarReducer,
  usersPage: UsersReducer,
});

const store = legacy_createStore(reducers);

export default store;
