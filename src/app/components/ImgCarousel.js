import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";
import ScanMed from "../images/scandinavian-meditation.jpg";
import CykelAkuten from "../images/cykelakuten-lund.png";

class ImgCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src={CykelAkuten} />
                </div>
                <div>
                    <img src={ScanMed} />
                </div>
            </Carousel>
        );
    }
};

export default ImgCarousel;