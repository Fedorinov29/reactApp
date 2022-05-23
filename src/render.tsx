import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { addNewPost, updateNewPostText } from "./Redux/State";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
export let rerenderEntireTree = (state: any) => {
  root.render(
    <BrowserRouter>
      <React.StrictMode>
        <App
          state={state}
          addPost={addNewPost}
          updateNewPostText={updateNewPostText}
        />
      </React.StrictMode>
    </BrowserRouter>
  );
};
