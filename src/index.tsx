import store from "./Redux/Redux-Store";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

let rerenderEntireTree: any = (state: any) => {
  root.render(
    <BrowserRouter>
      <React.StrictMode>
        <Provider store={store}>
          <App
            state={state}
            dispatch={store.dispatch.bind(store)}
            store={store}
          />
        </Provider>
      </React.StrictMode>
    </BrowserRouter>
  );
};

rerenderEntireTree(store.getState());
store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});
