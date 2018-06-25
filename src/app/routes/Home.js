import React, { Component } from "react";
import styled from "styled-components";
import {SectionDiv, TitleArea, SectionTitle, Overlay, size} from "../components/Styled";
import Icon from "../components/Icon";
import Scroll from "smoothscroll";
import BgVideo from "../images/bgvideo.mp4";

const Section = styled.section`
    height: ${props => (props.height == '0' || !props.height) ? '100vh' : props.height + 'px' };
    display: flex;
    align-items: center;
    background-image: linear-gradient(180deg, #2c7dbc 15%, #7cccc5 70%);    
    
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
        display: none;
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
                    <Video id="bgvid" playsinline autoPlay muted loop>
                        <source src={BgVideo} type="video/mp4" />
                    </Video>
                </VideoContainer>

                <SectionDiv responsive={"margin: 0; padding: 100px 20px 0 20px"}>
                    <TitleArea>
                        <MainTitle color={"#fff"}>Få ordning på din digitala profil</MainTitle>
                    </TitleArea>
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
                </SectionDiv>
            </Section>
        );
    }
}

export default Home;