
import React, { Component } from "react";

// Components
import Header from "./Header";

// Routes
import Home from "../routes/Home";
import Contact from "../routes/Contact";

class Layout extends Component {
    render() {
        return (
            <div className="app">
                <Header />
                <main id={"main"}>
                    <Home />
                    <Contact />
                </main>
            </div>
        );
    }
}

export default Layout;