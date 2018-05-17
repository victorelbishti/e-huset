import React, { Component } from "react";
import styled from "styled-components";
import { SectionDiv } from "../components/Styled";

const Section = styled.section`
    height: 100vh;
    display: flex;
    align-items: center;
    background-image: linear-gradient(-140deg, #2c7dbc 15%, #7cccc5 70%);
`;

const H2 = styled.h2`
    color: #ffffff;
`;

class Home extends Component {
    render() {
        return (
            <Section id="home">
                <SectionDiv>
                    <H2>Få ordning på din digitala profil</H2>
                </SectionDiv>
            </Section>
        );
    }
}

export default Home;