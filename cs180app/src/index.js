import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Link, Redirect, Route, Switch, Router } from "wouter";
import Project0 from "./projects/Project0";
import Project1 from "./projects/Project1";
import { AppBar, Container, Typography } from "@mui/material";

const RouterComponent = () => (
  <>
    <Router base="/cs180">
      <AppBar position="static">
        <Container maxWidth="xl" sx={{ p: 2 }}>
          <Link href="/">
            <Typography variant="h6">CS 180</Typography>
          </Link>
        </Container>
      </AppBar>
      <Switch>
        <Route path="/" component={App} />
        <Route path="/projects/0/" component={Project0} />
        <Route path="/projects/1/" component={Project1} />
        <Route>
          <Redirect href="/" />
        </Route>
      </Switch>
    </Router>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterComponent />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
