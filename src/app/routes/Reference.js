import React, { Component } from "react";
import styled from "styled-components";
import { Grid, GridCell } from "../components/Styled";
import Icon from "../components/Icon";

const ReferenceCard = styled.div`
    background: transparent;
    -webkit-clip-path: polygon(0 0%, 100% 4%, 100% 96%, 0% 100%);
    clip-path: polygon(0 0%, 100% 4%, 100% 96%, 0% 100%);
    padding: 65px 10px;
    width: 100%;
`;

const Container = styled.div`
    max-width: 1170px;
    margin: 0 auto;
    position: relative;
`;

const WhiteReferenceCard = styled(ReferenceCard)`
    background: #fff;
`;

const Section = styled.div`
    margin-bottom: 100px;
`;

const ReadMore = styled.a`
    color: #000;
    text-decoration: underline;
    
    &:hover {
        text-decoration: none;
    }
`;

class Reference extends Component {

    render() {
        return (
            <Section id="reference">
                <WhiteReferenceCard>
                    <Container>
                        <Grid columns={"1fr 1fr"}>
                            <GridCell>
                                <Icon icon={"image"} />
                            </GridCell>
                            <GridCell>
                                <h2>Scandinavian Meditation</h2>
                                <p>Curabitur ullamcorper in magna non fringilla. Nam lacus ante, rhoncus non pulvinar sed,
                                    mattis vel nisi. Nam laoreet enim sit amet dolor egestas, eu vehicula est bibendum.</p>
                                <ReadMore target={"_blank"} href={"https://scandinavianmeditation.com"}>Besök hemsida</ReadMore>
                            </GridCell>
                        </Grid>
                    </Container>
                </WhiteReferenceCard>
                <ReferenceCard>
                    <Container>
                        <Grid columns={"1fr 1fr"}>
                            <GridCell>
                                <Icon icon={"image"} />
                            </GridCell>
                            <GridCell>
                                <h2>Cykelakuten Lund</h2>
                                <p>Curabitur ullamcorper in magna non fringilla. Nam lacus ante, rhoncus non pulvinar sed,
                                    mattis vel nisi. Nam laoreet enim sit amet dolor egestas, eu vehicula est bibendum.</p>
                                <ReadMore target={"_blank"} href={"http://cykelakutenlund.se"}>Besök hemsida</ReadMore>
                            </GridCell>
                        </Grid>
                    </Container>
                </ReferenceCard>
            </Section>
        );
    }
}

export default Reference;