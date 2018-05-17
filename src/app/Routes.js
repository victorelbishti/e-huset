import { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./routes/Home";
import Contact from "./routes/Contact";


class Routes extends Component {
    render() {
        return (
            <Router>
                <Route exact path={"/"} component={Home} />
                <Route path={"/contact"} component={Contact} />
            </Router>
        );
    }
}

export default Routes;