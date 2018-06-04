import React, { Component } from "react";
import styled from "styled-components";
import { SectionDiv, Grid, GridCell } from "../components/Styled";
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

class Home extends Component {
    render() {
        return (
            <Section id="home">
                <SectionDiv>
                    <Grid columns={"1fr 1fr"}>
                        <GridCell>
                            <h2>Få ordning på din digitala profil</h2>
                            <Text>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Sed porttitor lectus nibh. Curabitur aliquet quam id dui posuere blandit. Nulla porttitor accumsan tincidunt. Vivamus suscipit tortor eget felis porttitor volutpat.</Text>
                        </GridCell>
                        <GridCell>
                            <Icon icon={"image"} />
                        </GridCell>
                    </Grid>
                </SectionDiv>
            </Section>
        );
    }
}

export default Home;