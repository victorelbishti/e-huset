import React, { Component } from "react";
import styled from "styled-components";
import {SectionDiv, Grid, GridCell, size} from "../components/Styled";
import Icon from "../components/Icon";

const Section = styled.section`
    height: 100vh;
    display: flex;
    align-items: center;
    background-image: linear-gradient(-140deg, #2c7dbc 15%, #7cccc5 70%);
    
    h2 {
        color: #ffffff;
    }
`;

const Text = styled.p`
    color: #fff;
`;

const Image = styled.img`
    width: 250px;
    
    @media (max-width: ${size.small}) {
        width: 150px;
    }
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
    width: 350px;
    margin: 0 auto;
`;

class Home extends Component {
    render() {
        return (
            <Section id="home">
                <SectionDiv responsive={"margin: 0 20px; padding-top: 100px"}>
                    <Grid columns={"1fr 1fr"}>
                        <GridCell responsive={"padding: 0"}>
                            <h2>Få ordning på din digitala profil</h2>
                            <Text>Låt e-huset hjälpa dig, vi är experter på webbutveckling och digital
                                marknadsföring. Oavsett om du är i behov av en ny hemsida, en digital
                                renovering eller några timmar support i månaden så finns vi här för att
                                hjälpa dig. Scrolla ner för att se våra erbjudanden.</Text>
                        </GridCell>
                        <GridCell responsive={"padding: 0"}>
                            <List>
                                <ListItem>
                                    <span><Icon size={"2em"} icon={"checkmark"} /></span>
                                    <span>Responsiva hemsidor</span>
                                </ListItem>
                                <ListItem>
                                    <span><Icon size={"2em"} icon={"checkmark"} /></span>
                                    <span>Löpande underhåll</span>
                                </ListItem>
                                <ListItem>
                                    <span><Icon size={"2em"} icon={"checkmark"} /></span>
                                    <span>Sökoptimering</span>
                                </ListItem>
                                <ListItem>
                                    <span><Icon size={"2em"} icon={"checkmark"} /></span>
                                    <span>Digital marknadsföring</span>
                                </ListItem>
                            </List>
                        </GridCell>
                    </Grid>
                </SectionDiv>
            </Section>
        );
    }
}

export default Home;