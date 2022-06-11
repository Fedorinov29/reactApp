import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dialogs from "./Components/Dialogs/Dialogs";
import Header from "./Components/Header/Header";
import Music from "./Components/Music/Music";
import Nav from "./Components/Navigation/Nav";
import News from "./Components/News/News";
import Profile from "./Components/Profile/Profile";
import Settings from "./Components/Settings/Settings";

const App: any = (props: any) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav store={props.store} state={props.state} />
      <div className="app-wrapper-content">
        <Routes>
          <Route
            path="/dialogs/*"
            element={
              <Dialogs
                // dialogsPage={props.state.dialogsPage}
                // dispatch={props.dispatch}
                store={props.store}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <Profile
                // profilePage={props.state.profilePage}
                // sideBar={props.state.sideBar}
                // dispatch={props.dispatch}
                store={props.store}
              />
            }
          />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
