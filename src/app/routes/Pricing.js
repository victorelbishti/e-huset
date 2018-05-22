import React, { Component } from "react";
import styled from "styled-components";
import { SectionDiv, Grid, GridCell } from "../components/Styled";

const Section = styled.section`
    display: flex;
    align-items: center;
    padding: 50px 0;
`;

class Pricing extends Component {

    render() {
        return (
            <Section id="pricing">
                <SectionDiv border={"top"}>
                    <Grid>
                        <GridCell padding={"120px 0 100px 0"}>
                            <h2>Våra paket/priser</h2>
                            <p>Curabitur aliquet quam id dui posuere blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur aliquet quam id dui posuere blandit.</p>
                        </GridCell>
                    </Grid>
                </SectionDiv>
            </Section>
        );
    }
}

export default Pricing;