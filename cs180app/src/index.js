import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Link, Redirect, Route, Switch, Router } from "wouter";
import Project0 from "./projects/Project0";
import Project1 from "./projects/Project1";
import { AppBar, Container, Typography } from "@mui/material";
import Project2 from "./projects/Project2";
import Project3 from "./projects/Project3";

const RouterComponent = () => (
  <>
    <Router base="/cs180">
      <AppBar position="static">
        <Container maxWidth="xl" sx={{ p: 2 }}>
          <Link href="/" className={"noDecor"}>
            <Typography variant="h6">CS 180</Typography>
          </Link>
        </Container>
      </AppBar>
      <Switch>
        <Route path="/" component={App} />
        <Route path="/projects/0/" component={Project0} />
        <Route path="/projects/1/" component={Project1} />
        <Route path="/projects/2/" component={Project2} />
        <Route path="/projects/3/" component={Project3} />
        <Route path="/projects/4/" component={App} />
        <Route path="/projects/5/" component={App} />
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
