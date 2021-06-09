import * as React from "react";
import * as ReactDOM from "react-dom";
import './style.css';

import { HelloWorld } from "./App";

ReactDOM.render(
  <HelloWorld userName="Developer" lang="TypeScript" />,
  document.getElementById("output")
);
