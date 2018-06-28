import React, { Component } from "react";
import styled from "styled-components";
import Icon from "../components/Icon";
import { Grid, ReferenceCard, WhiteReferenceCard, Container, SectionTitle, SectionSubTitle, GridCell, TitleArea, Button, colors } from "../components/Styled";
import Scroll from "smoothscroll";
import AOS from "aos";
import ImgSrc from "../images/E-Huset_Displays.png";

const Section = styled.section`
    margin: 20px 0;
`;

const Image = styled.img`
    width: 100%;
    max-width: 550px;
`;

const RowTitle = styled.h2`
    font-size: 32px;
    line-height: 1.2em;
`;

const Text = styled.p`
    font-size: 20px;
    line-height: 1.5em;
    font-family: Proxima-Nova-Light;
`;

const CallToAction = styled(Button)`
    line-height: 1.4em;
    width: 80%;
    text-transform: uppercase;
    padding: 15px 10px;
`;

class Features extends Component {

    constructor(props) {
        super(props);

        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    componentDidMount(){
        AOS.init();
    }

    componentWillReceiveProps (){
        AOS.refresh();
    }

    handleButtonClick(elementName) {
        let element = document.querySelector('#' + elementName);
        let offset = element.offsetTop - 100;
        Scroll(offset, 1000);
    }

    render() {
        return (
            <Section id="features">
                <ReferenceCard>
                    <Container>
                        <TitleArea>
                            <SectionTitle>Låt oss ta hand om din IT</SectionTitle>
                                <Text>Låt e-huset hjälpa dig, vi är experter på webbutveckling och webbdesign.
                                Oavsett om du är i behov av en ny hemsida, en digital renovering eller några timmar
                                support i månaden så finns vi här för att hjälpa dig.</Text>
                            <CallToAction onClick={ () => this.handleButtonClick('contact') }>Beställ en gratis demohemsida</CallToAction>
                        </TitleArea>
                    </Container>
                </ReferenceCard>

                <WhiteReferenceCard>
                    <Container>
                        <Grid columns={"1fr 1fr"} gap={"20px"}>
                            <GridCell>
                                <RowTitle>Webbdesign & -utveckling</RowTitle>
                                <p>Alla våra projekt skapas med en personlig och modern
                                    design som fungerar lika bra på datorn som i mobilen.</p>
                                <Button onClick={ () => this.handleButtonClick('packages') }>Se våra paket</Button>
                            </GridCell>
                            <GridCell>
                                <Image src={ImgSrc} alt={"E-huset.se"} />
                            </GridCell>
                        </Grid>
                    </Container>
                </WhiteReferenceCard>

                <ReferenceCard>
                    <Container>
                        <Grid columns={"1fr 1fr"} gap={"20px"}>
                            <GridCell align={"center"}>
                                <Icon icon={"upload"} fill={colors.light} />
                                <RowTitle>Säker hosting</RowTitle>
                                <p>Tillåt oss att ta hand om din hemsida med säker hosting från ett av Sveriges bästa webbhotell.</p>
                            </GridCell>

                            <GridCell align={"center"}>
                                <Icon icon={"analytics"} fill={colors.light} />
                                <RowTitle>Statistik</RowTitle>
                                <p>Behöver du få statistik över besökare och trafik på din webbplats? Inga problem.</p>
                            </GridCell>
                        </Grid>
                    </Container>
                </ReferenceCard>
            </Section>
        );
    }
}

export default Features;