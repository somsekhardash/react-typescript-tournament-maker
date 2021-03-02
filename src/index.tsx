import React from "react";
import { hydrate } from "react-dom";
const title = "React with Webpack and Babel";

hydrate(<div>{title}</div>, document.getElementById("app"));
