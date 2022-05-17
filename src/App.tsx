import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dialogs from "./Components/Dialogs/Dialogs";
import Header from "./Components/Header/Header";
import Music from "./Components/Music/Music";
import FriendOnline from "./Components/Navigation/FriendOnline/FriendOnline";
import Nav from "./Components/Navigation/Nav";
import News from "./Components/News/News";
import Profile from "./Components/Profile/Profile";
import Settings from "./Components/Settings/Settings";

const App: any = (props: any) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav state={props.state} />
        <div className="app-wrapper-content">
          <Routes>
            <Route
              path="/dialogs/*"
              element={<Dialogs state={props.state.dialogsPage} />}
            />
            <Route
              path="/profile"
              element={<Profile state={props.state.profilePage} />}
            />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
          {/* <FriendOnline state={props.state.sideBar} /> */}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
