import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Link, Redirect, Route, Switch } from "wouter";
import Project0 from "./projects/Project0";

const Router = () => (
  <>
    <Switch>
      <Route path="/" component={App} />
      <Route path="/projects/0/" component={Project0} />
      <Route>
        <Redirect href="/" />
      </Route>
    </Switch>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
