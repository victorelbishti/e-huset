import React, { Component } from "react";
import styled from "styled-components";
import { SectionDiv, Grid, GridCell } from "../components/Styled";
import HouseImg from "../images/house.png";

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
`;

class Home extends Component {
    render() {
        return (
            <Section id="home">
                <SectionDiv>
                    <Grid columns={"1fr 1fr"}>
                        <GridCell>
                            <h2>Få ordning på din digitala profil</h2>
                            <Text>Låt e-huset hjälpa dig, vi är experter på webbutveckling och digital
                                marknadsföring. Oavsett om du är i behov av en ny hemsida, en digital
                                renovering eller några timmar support i månaden så finns vi här för att
                                hjälpa dig. Scrolla ner för att se våra erbjudanden.</Text>
                        </GridCell>
                        <GridCell align={"center"}>
                            <Image src={HouseImg} alt={"E-huset.se"} />
                        </GridCell>
                    </Grid>
                </SectionDiv>
            </Section>
        );
    }
}

export default Home;