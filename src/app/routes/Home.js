
// Modules
import React, { Component } from "react";
import styled from "styled-components";
import Scroll from "smoothscroll";
import ReactRotatingText from 'react-rotating-text';

// Components & Styles
import Icon from "../components/Icon";
import {SectionDiv, TitleArea, SectionTitle, Overlay, size} from "../components/Styled";

// Images
import BgVideo from "../images/bgvideo.mp4";
import VideoPoster from "../images/video-poster.png";

const Section = styled.section`
    height: ${props => (props.height == '0' || !props.height) ? '100vh' : props.height + 'px' };
    display: flex;
    align-items: center;
    background-image: linear-gradient(180deg, #2c7dbc 15%, #7cccc5 70%);
    overflow: hidden; 
    
    h2 {
        color: #ffffff;
    }
    
    @media screen and (orientation:landscape)
    and (min-device-width: ${size.small}) 
    and (max-device-width: ${size.medium}) {
       
       > div > div > div:last-of-type {
            display: none;
       }
    }
`;

const HomeSectionDiv = styled(SectionDiv)`
    padding: 140px 0 40px 0;
    text-align: center;
`;

const ActionContainer = styled.div`
    margin: 0 auto;
    text-align: center;
    
    > div {
        display: inline-block;
        margin: 20px 30px;
        cursor: pointer;
        
        span {
            text-align: center;
            color: #fff;
        }
        
        &:last-of-type svg {
            transform: rotate(-90deg);
        }
    }
    
    svg {
        fill: #fff;
        margin-bottom: 10px;
        padding: 10px;
        border: 3px solid #fff;
        border-radius: 50%;
    }
`;

const VideoContainer = styled.div`
    display: block;
    position: absolute;
    width: 100%;
    height: ${props => (props.height == '0' || !props.height) ? '100vh' : props.height + 'px' };
    overflow: hidden;
    
    @media (max-width: ${size.large}) {
        background: url(${VideoPoster}) no-repeat center center;
        background-size: cover;
        
        video {
            display: none;
        }
    }
`;

const Video = styled.video`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
`;

const MainTitle = styled(SectionTitle)`
    font-size: 52px;
    line-height: 1.2em;
    text-transform: none;
    letter-spacing: 2px
    font-family: Proxima-Nova-Light;
    
    @media (max-width: ${size.small}) {
        font-size: 30px;
    }
`;

const RotationWords = styled.span`
    position: relative;
    display: block;
    font-family: Proxima-Nova-Bold;
    padding-left: 10px;
`;

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            videoHeight: 0
        };

        this.handleClick = this.handleClick.bind(this);
        this.updateDimensions = this.updateDimensions.bind(this);
    }

    handleClick(elementName){
        let element = document.querySelector('#' + elementName);
        let offset = element.offsetTop - 100;
        Scroll(offset, 1000);
    }

    updateDimensions() {

        let height = document.getElementById('bgvid').clientHeight;
        let h2 = document.getElementById('bgvid').offsetHeight;
        let h3 = document.getElementById('bgvid').scrollHeight;

        if (typeof height == 'undefined') {
            height = h2;
        } else if (typeof h2 == 'undefined') {
            height = h3;
        }

        this.setState({videoHeight: height});
    }
    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions);
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

    render() {
        return (
            <Section height={this.state.videoHeight} id="home">
                <Overlay height={this.state.videoHeight} />
                <VideoContainer height={this.state.videoHeight}>
                    <Video poster={VideoPoster} id="bgvid" playsinline autoPlay muted loop>
                        <source src={BgVideo} type="video/mp4" />
                    </Video>
                </VideoContainer>

                <HomeSectionDiv responsive={"margin: 0; padding: 100px 20px 0 20px"}>
                    <MainTitle color={"#fff"}>
                        Vi hjälper ditt företag med
                        <RotationWords>
                            <ReactRotatingText items={['Webbdeisgn', 'Webbutveckling', 'Sökoptimering', 'WordPress']} />
                        </RotationWords>
                    </MainTitle>
                    <ActionContainer>

                        <div>
                            <a href={"#"} onClick={ () => this.handleClick('features') }>
                                <Icon icon={"chevronDown"} size={"3em"} />
                                <span>Se vad vi gör</span>
                            </a>
                        </div>

                        <div>
                            <a href={"#"} onClick={ () => this.handleClick('contact') }>
                                <Icon icon={"chevronDown"} size={"3em"} />
                                <span>Kontakta oss</span>
                            </a>
                        </div>

                    </ActionContainer>
                </HomeSectionDiv>
            </Section>
        );
    }
}

export default Home;