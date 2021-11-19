import React from "react";
import ReactDOM from "react-dom";
import { AppRouter } from "./routers/AppRouter";
import "./styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <AppRouter />,
  document.getElementById("root")
  );
