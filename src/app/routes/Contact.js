import React, { Component } from "react";
import styled from "styled-components";
import { SectionDiv, Grid, GridCell, VerticalLine } from "../components/Styled";

const Section = styled.section`
    display: flex;
    align-items: center;
    padding: 50px 0;
`;

class Contact extends Component {

    render() {
        return (
            <Section id="contact">
                <SectionDiv>
                    <Grid columns={"1fr 1fr"}>
                        <GridCell padding={"40px 50px 40px 0"}>
                            <VerticalLine background={"theme"} side={"right"}/>
                            <h2>Cell 1</h2>
                            <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh.</p>
                        </GridCell>
                        <GridCell padding={"40px 0 40px 50px"}>
                            <h2>Cell 2</h2>
                            <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh.</p>
                        </GridCell>
                    </Grid>
                </SectionDiv>
            </Section>
        );
    }
}

export default Contact;