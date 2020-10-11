import React from "react";
import ReactDOM from "react-dom";
import ReactGA from "react-ga";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "bootstrap-utilities/bootstrap-utilities.css";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactGA.initialize("UA-180277638-1");

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
