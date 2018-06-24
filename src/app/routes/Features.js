import React, { Component } from "react";
import styled from "styled-components";
import Icon from "../components/Icon";
import { SectionDiv, Grid, GridCell, Card, TextArea, Button, size } from "../components/Styled";
import Scroll from "smoothscroll";
import AOS from "aos";

const Section = styled.section`
    display: flex;
    align-items: center;
    padding: 50px 0;
    margin-top: 20px;
    
    @media (max-width: ${size.medium}) {
        margin: 20px 40px;
        padding: 0;
    }
`;

const GradientPrice = styled.h3`
    font-size: 42px;
    color: #2aa380;
    margin-bottom: 10px;
    line-height: 1em;
    font-family: Proxima-Nova-Light;
    background: linear-gradient(to bottom right, #2c7dbc, #7cccc5);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

const GradientText = styled.h6`
    font-size: 14px;
    color: #2aa380;
    margin: 0 0 20px 0;
    line-height: 1em;
    font-family: Proxima-Nova;
    background: linear-gradient(to bottom right, #2c7dbc, #7cccc5);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
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

    handleButtonClick() {
        let element = document.querySelector('#contact');
        let offset = element.offsetTop - 100;
        Scroll(offset, 1000);
    }

    render() {
        return (
            <Section id="features">
                <SectionDiv responsive={"margin: 20px 0"}>
                    <Grid columns={"1fr 1fr 1fr"} gap={"40px"}>
                        <GridCell data-aos={"zoom-in"} data-aos-duration={"600"}>
                            <Card>
                                <Icon icon="lightning" />
                                <h2>Webbplats - Basic</h2>
                                <GradientPrice>5 995kr</GradientPrice>
                                <GradientText>ex. moms</GradientText>
                                <TextArea divider={"theme"}>
                                    <p>Basic, det snabba, moderna och smidiga alternativet för dig som vill ha en enkel,
                                        stilren och responsiv hemsida. Perfekt för att väcka intresse hos besökaren och
                                        inleda en kundkontakt.</p>
                                </TextArea>
                                <Button onClick={this.handleButtonClick}>Beställ nu</Button>
                            </Card>
                        </GridCell>
                        <GridCell data-aos={"zoom-in"} data-aos-duration={"600"}>
                            <Card>
                                <Icon icon="star" />
                                <h2>Webbplats - Pro</h2>
                                <GradientPrice>9 995kr</GradientPrice>
                                <GradientText>ex. moms</GradientText>
                                <TextArea divider={"theme"}>
                                    <p>Pro, en hemsida med upp till 10 landningssidor. Passar för dig som är i
                                        behov av en bredare presentation av ditt företag eller organisation.</p>
                                </TextArea>
                                <Button onClick={this.handleButtonClick}>Beställ nu</Button>
                            </Card>
                        </GridCell>
                        <GridCell data-aos={"zoom-in"} data-aos-duration={"600"}>
                            <Card>
                                <Icon icon="configure" />
                                <h2>Webbplats - Anpassad</h2>
                                <GradientPrice>Offert</GradientPrice>
                                <GradientText>efter överenskommelse</GradientText>

                                <TextArea divider={"theme"}>
                                    <p>Skräddarsydd hemsida helt enligt dina villkor. Vill du ha en webbutik eller specifika
                                        användarfunktioner för dina besökare? Inga problem, förklara vad du behöver så
                                        fixar vi det åt dig.</p>
                                </TextArea>
                                <Button onClick={this.handleButtonClick}>Beställ nu</Button>
                            </Card>
                        </GridCell>
                    </Grid>
                </SectionDiv>
            </Section>
        );
    }
}

export default Features;