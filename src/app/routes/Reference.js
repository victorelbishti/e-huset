import React, { Component } from "react";
import styled from "styled-components";
import { Grid, GridCell, size } from "../components/Styled";
import ScanMed from "../images/scandinavian-meditation.png";
import CykelAkuten from "../images/cykelakuten.png";

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
    
    @media (max-width: ${size.small}) {
        margin: 0 20px;
    }
`;

const WhiteReferenceCard = styled(ReferenceCard)`
    background: #fff;
`;

const Section = styled.section`
    margin-bottom: 100px;
    
    @media (max-width: ${size.small}) {
        margin-bottom: 0;
    }
`;

const ReadMore = styled.a`
    color: #000;
    text-decoration: underline;
    
    &:hover {
        text-decoration: none;
    }
`;

const Image = styled.img`
    width: 250px;
`;

class Reference extends Component {

    render() {
        return (
            <Section id="reference">
                <WhiteReferenceCard>
                    <Container>
                        <Grid columns={"1fr 1fr"}>
                            <GridCell align={"center"}>
                                <Image src={ScanMed} alt={"Scandinavian Meditation"} />
                            </GridCell>
                            <GridCell>
                                <h2>Scandinavian Meditation</h2>
                                <p>Scandinavian Meditation är en hemsida som ger verktyg för meditation, mindfulness och stresshantering.
                                    Vissa av verktygen, som ljudfiler med guidade meditationer, är begränsade till dess betalande användare medan
                                    andra verktyg för att förmedla tips och idéer, exempelvis bloggen, är öppen för alla besökare.</p>
                                <ReadMore target={"_blank"} href={"https://scandinavianmeditation.com"}>Besök hemsida</ReadMore>
                            </GridCell>
                        </Grid>
                    </Container>
                </WhiteReferenceCard>
                <ReferenceCard>
                    <Container>
                        <Grid columns={"1fr 1fr"}>
                            <GridCell align={"center"}>
                                <Image src={CykelAkuten} alt={"Cykelakuten Lund"} />
                            </GridCell>
                            <GridCell>
                                <h2>Cykelakuten Lund</h2>
                                <p>Cykelakuten är en mobil cykelreparatör i centrala Lund. Hemsidan visar upp de tjänster
                                    som dem erbjuder på ett enkelt och stilrent vis. </p>
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