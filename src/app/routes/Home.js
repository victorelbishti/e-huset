import React, { Component } from "react";
import styled from "styled-components";
import {SectionDiv, Grid, GridCell, size} from "../components/Styled";
import Icon from "../components/Icon";
import ImgSrc from "../images/E-Huset_Displays.png";
import Scroll from "smoothscroll";

const Section = styled.section`
    height: 100vh;
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

const Text = styled.p`
    color: #fff;
`;

const ListItem = styled.li`
    list-style-type: none;
    display: block;
    color: #fff;
    margin: 10px 20px;
    
    span svg {
        display: inline;
        fill: #fff;
        margin-right: 20px;
        vertical-align: text-bottom;
    }
`;

const List = styled.ul`
    padding: 0;
    margin: 0 auto;
    
    @media only screen and (max-width: ${size.medium}) and (min-width: ${size.small}) {
        width: auto;
    }
    
    @media screen and (orientation:landscape)
    and (min-device-width: ${size.small}) 
    and (max-device-width: ${size.medium}) {
       display: none;
    }
`;

const Image = styled.img`
    max-width: 585px;
    width: 100%;
    
    @media (max-width: ${size.small}) {
        display: none;
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

class Home extends Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(elementName){
        let element = document.querySelector('#' + elementName);
        let offset = element.offsetTop - 100;
        Scroll(offset, 1000);
    }

    render() {
        return (
            <Section id="home">
                <SectionDiv responsive={"margin: 0; padding: 100px 20px 0 20px"}>
                    <Grid columns={"1fr 1fr"}>
                        <GridCell responsive={"padding: 0"}>
                            <h2>Få ordning på din digitala profil</h2>
                            <Text>Låt e-huset hjälpa dig, vi är experter på webbutveckling och digital
                                marknadsföring. Oavsett om du är i behov av en ny hemsida, en digital
                                renovering eller några timmar support i månaden så finns vi här för att
                                hjälpa dig. Scrolla ner för att se våra erbjudanden.</Text>
                        </GridCell>
                        <GridCell responsive={"padding: 0"}>
                            <Image src={ImgSrc} alt={"E-huset.se"} />
                        </GridCell>
                    </Grid>
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