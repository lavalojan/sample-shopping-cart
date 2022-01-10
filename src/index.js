import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import Counter from "./components/counter";

ReactDom.render(<Counter/>, document.getElementById("root"));
