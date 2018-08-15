
import React, { Component } from "react";

// Components
import Header from "./Header";
import Footer from "./Footer";

// Routes
import Home from "../routes/Home";
import Features from "../routes/Features";
import Reference from "../routes/Reference";
import Contact from "../routes/Contact";
import Services from "../routes/Services";
import Packages from "../routes/Packages";

class Layout extends Component {

    render() {

        return (
            <div className="app">
                <Header />
                <main id={"main"}>
                    <Home />
                    <Features />
                    <Services/>
                    <Reference />
                    <Contact />
                </main>
                <Footer/>
            </div>
        );
    }
}

export default Layout;