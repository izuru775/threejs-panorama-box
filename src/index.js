import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter as Router} from "react-router-dom";

ReactDOM.render(
    <Router>
        Example from: threejs(https://threejs.org/examples/?q=panora#webgl_panorama_cube)
        Hosted by : Sodi Adikaram (Deakin University)
        <App/>
    </Router>,
    document.getElementById("root")
);