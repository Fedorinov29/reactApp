import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { addNewPost } from "./Redux/State";

export let rerenderEntireTree = (state: any) => {
  const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
  );
  root.render(
    <React.StrictMode>
      <App state={state} addPost={addNewPost} />
    </React.StrictMode>
  );
};
