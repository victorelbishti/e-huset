import React, { Component } from "react";
import styled from "styled-components";
import Icon from "../components/Icon";
import { SectionDiv, Grid, OneThridCell, Card} from "../components/Styled";

const Section = styled.section`
    display: flex;
    align-items: center;
    padding: 50px 0;
    margin-top: -220px;
`;

class Contact extends Component {

    render() {
        return (
            <Section id="features">
                <SectionDiv>
                    <Grid>
                        <OneThridCell>
                            <Card>
                                <Icon icon="computer" />
                                <h3>Card 1</h3>
                                <p>Vivamus suscipit tortor eget felis porttitor volutpat. Sed porttitor lectus nibh. Pellentesque in ipsum id orci porta dapibus. Vivamus suscipit tortor eget felis porttitor volutpat. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.</p>
                            </Card>
                        </OneThridCell>
                        <OneThridCell>
                            <Card>
                                <Icon icon="star" />
                                <h3>Card 2</h3>
                                <p>Vivamus suscipit tortor eget felis porttitor volutpat. Sed porttitor lectus nibh. Pellentesque in ipsum id orci porta dapibus. Vivamus suscipit tortor eget felis porttitor volutpat. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.</p>
                            </Card>
                        </OneThridCell>
                        <OneThridCell>
                            <Card>
                                <Icon icon="phone" />
                                <h3>Card 3</h3>
                                <p>Vivamus suscipit tortor eget felis porttitor volutpat. Sed porttitor lectus nibh. Pellentesque in ipsum id orci porta dapibus. Vivamus suscipit tortor eget felis porttitor volutpat. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.</p>
                            </Card>
                        </OneThridCell>
                    </Grid>
                </SectionDiv>
            </Section>
        );
    }
}

export default Contact;