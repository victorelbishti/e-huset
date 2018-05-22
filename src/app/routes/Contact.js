import React, { Component } from "react";
import styled from "styled-components";

import { SectionDiv, Grid, OneHalfCell, VerticalLine } from "../components/Styled";

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
                    <Grid>
                        <OneHalfCell>
                            <VerticalLine/>
                            <h2>Cell 1</h2>
                            <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh.</p>
                        </OneHalfCell>
                        <OneHalfCell>
                            <h2>Cell 2</h2>
                            <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh.</p>
                        </OneHalfCell>
                    </Grid>
                </SectionDiv>
            </Section>
        );
    }
}

export default Contact;