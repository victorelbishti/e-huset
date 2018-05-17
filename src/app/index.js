
import React from "react";
import ReactDOM, { render } from "react-dom";
import Layout from "./components/Layout";
import { injectGlobal } from "styled-components";

// Fonts
import ProximaNova from "./fonts/ProximaNova-Regular.otf";
import ProximaNovaBold from "./fonts/ProximaNova-Extrabold.otf";
import ProximaNovaLight from "./fonts/ProximaNova-Light.otf";

injectGlobal`
    * {
        box-sizing: border-box;
    }
    
    @font-face {
        font-family: 'Proxima-Nova';
        src: url(${ProximaNova}) format('opentype');
    }
    
    @font-face {
        font-family: 'Proxima-Nova-Bold';
        src: url(${ProximaNovaBold}) format('opentype');
    }
    
    @font-face {
        font-family: 'Proxima-Nova-Light';
        src: url(${ProximaNovaLight}) format('opentype');
    }
    
    html {
        font-family: sans-serif;
        line-height: 1.15;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
    }
    
    body {
        margin: 0;
        overflow-y: scroll;
        overflow-x: hidden;
        font-family: "Proxima-Nova", sans-serif;
        font-weight: normal;
        line-height: normal;
        -webkit-font-smoothing: antialiased;
        background-color: rgba(247,247,247,0.9);
    }
    
    article, aside, footer, header, nav, section {
        display: block;
    }
    
    h1, h2, h3 {
        font-family: 'Proxima-Nova-Bold', sans-serif;
    }
    
    h4, h5, h6 {
        font-family: 'Proxima-Nova-Light', sans-serif;
    }
    
    a {
        text-decoration: none;
    }
`;

render((
    <Layout />
), document.getElementById('root'));