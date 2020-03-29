import React from "react";
import ReactDOM from "react-dom";
import "react-app-polyfill/stable";
import "react-app-polyfill/ie9";
import "react-app-polyfill/ie11";
import App from "./App";
import { StoreProvider } from "./Store";

const root = document.getElementById("app-root");
ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  root
);
