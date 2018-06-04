import React, { Component } from "react";
import styled from "styled-components";
import { Section, SectionDiv, Grid, GridCell, TitleArea, TextArea } from "../components/Styled";

class About extends Component {

    render() {
        return (
            <Section id="about">
                <SectionDiv>
                    <Grid>
                        <GridCell padding={"120px 0 100px 0"}>
                            <TitleArea>
                                <h2>Om E-huset</h2>
                            </TitleArea>
                            <TextArea>
                                <p>Curabitur aliquet quam id dui posuere blandit. Vestibulum ante ipsum primis in faucibus orci
                                luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel,
                                ullamcorper sit amet ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur aliquet quam
                                id dui posuere blandit.</p>
                            </TextArea>
                        </GridCell>
                    </Grid>
                </SectionDiv>
            </Section>
        );
    }
}

export default About;