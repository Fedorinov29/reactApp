import store from "./Redux/State";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

let rerenderEntireTree: any = (state: any) => {
  root.render(
    <BrowserRouter>
      <React.StrictMode>
        <App state={state} dispatch={store.dispatch.bind(store)} />
      </React.StrictMode>
    </BrowserRouter>
  );
};

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);
