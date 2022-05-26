import state, { subscribe } from "./Redux/State";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  addNewPost,
  sendNewMessage,
  updateNewMessageText,
  updateNewPostText,
} from "./Redux/State";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

let rerenderEntireTree: any = (state: any) => {
  root.render(
    <BrowserRouter>
      <React.StrictMode>
        <App
          state={state}
          addPost={addNewPost}
          updateNewPostText={updateNewPostText}
          sendNewMessage={sendNewMessage}
          updateNewMessageText={updateNewMessageText}
        />
      </React.StrictMode>
    </BrowserRouter>
  );
};

rerenderEntireTree(state);
subscribe(rerenderEntireTree);
