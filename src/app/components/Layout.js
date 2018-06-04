
import React, { Component } from "react";

// Components
import Header from "./Header";
import Footer from "./Footer";

// Routes
import Home from "../routes/Home";
import Features from "../routes/Features";
import Contact from "../routes/Contact";
import About from "../routes/About";

class Layout extends Component {
    render() {
        return (
            <div className="app">
                <Header />
                <main id={"main"}>
                    <Home />
                    <Features />
                    <About />
                    <Contact />
                </main>
                <Footer/>
            </div>
        );
    }
}

export default Layout;