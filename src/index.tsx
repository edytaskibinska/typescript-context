import React from "react";
import ReactDOM from "react-dom";
import "react-app-polyfill/stable";
import "react-app-polyfill/ie9";
import "react-app-polyfill/ie11";
import App from "./App";
import "./index.css";
import { Router, RouteComponentProps } from "@reach/router";
import HomePage from "./HomePage";
import FavPage from "./FavPage";

import { StoreProvider } from "./Store";

const root = document.getElementById("app-root");

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;

ReactDOM.render(
  <StoreProvider>
    <Router>
      <App path="/">
        <RouterPage pageComponent={<HomePage />} path="/" />
        <RouterPage pageComponent={<FavPage />} path="/faves" />
      </App>
    </Router>
  </StoreProvider>,
  root
);
