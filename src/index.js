import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter as Router} from "react-router-dom";

ReactDOM.render(
    <Router>
        <p>Example from: threejs(https://threejs.org/examples/?q=panora#webgl_panorama_cube)</p>
        Created by : Sodi Adikaram (Deakin University)
        <App/>
    </Router>,
    document.getElementById("root")
);