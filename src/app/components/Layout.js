
import React, { Component } from "react";

// Components
import Header from "./Header";
import Footer from "./Footer";

// Routes
import Home from "../routes/Home";
import Features from "../routes/Features";
import About from "../routes/About";
import Reference from "../routes/Reference";
import Contact from "../routes/Contact";


class Layout extends Component {
    render() {
        return (
            <div className="app">
                <Header />
                <main id={"main"}>
                    <Home />
                    <Features />
                    <About />
                    <Reference />
                    <Contact />
                </main>
                <Footer/>
            </div>
        );
    }
}

export default Layout;