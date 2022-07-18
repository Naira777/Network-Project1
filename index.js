import "bootstrap/dist/css/bootstrap.min.css";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import React from "react";
import SamuraiJSApp from "./App";
import ReactDOM from "react-dom";

ReactDOM.render(<SamuraiJSApp />, document.getElementById("root"));

serviceWorker.unregister();
