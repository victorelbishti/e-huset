
import React, { Component } from "react";
import Icon from "../components/Icon";
import {SectionDiv, SectionTitle, Grid, GridCell, TitleArea, ServiceCard, size, colors} from "../components/Styled";
import styled from "styled-components";
import AOS from "aos";

const Section = styled.section`
    display: flex;
    align-items: center;
    padding: 50px 0;
    background: #2c7dbc;
    
    @media (max-width: ${size.small}) {
        margin: 0;
        padding: 20px 40px;
    }
`;

const Textbox = styled.div`
    
    top: 100%;
    z-index: ${props => props.toggled ? `100` : `0`};s
    color:#FFF;
    width: 100%;
    margin: 10px 0;
    height: ${props => props.toggled ? `160px` : `0`};
    padding: ${props => props.toggled ? `20px` : `0 20px`};
    transition: all .7s cubic-bezier(0.4, 0.25, 0, 1);
    overflow: hidden;
    box-sizing: border-box;
`;

const ToggleContainer = styled.div`
    float: right;
    margin-top: .8em;
    
    svg { fill: #fff; }
`;

class Services extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: {
                0: {
                    title: "Utbildning",
                    text: `Vi visar er hur ni själva kan ta hand om er hemsida.`,
                    icon: "computer",
                    toggled: false
                },
                1: {
                    title: "Telefon & mailsupport",
                    text: `Behöver ni hjälp med att uppdatera hemsidan så är det bara att slå en signal eller maila.`,
                    icon: "support",
                    toggled: false
                },
                2: {
                    title: "Uppdateringar av programvara",
                    text: `Varje månad uppdaterar vi WordPress, WordPress temat och alla
                    tillägg som är installerade på er webbplats för att minimera
                    risken för intrång.`,
                    icon: "update",
                    toggled: false
                },
                3: {
                    title: "Licenskostnaden",
                    text: `Vi står för licenskostnaden för det WordPress-tema vi byggt er hemsida med.`,
                    icon: "credit_card",
                    toggled: false
                },
                4: {
                    title: "Backup / Säkerhetskopiering",
                    text: `Backup av er hemsida varje månad. Alla backuper lagras i 90 dagar.`,
                    icon: "upload",
                    toggled: false
                },
                5: {
                    title: "Säkerhetskontroll",
                    text: `Varje dag kontrolleras hemsidan efter skadlig kod och andra sårbarheter.`,
                    icon: "shield",
                    toggled: false
                }
            }
        };

        this.handleToggle = this.handleToggle.bind(this);
    }

    componentDidMount(){
        AOS.init();
    }

    componentWillReceiveProps (){
        AOS.refresh();
    }

    handleToggle(index) {

        let { toggled } = this.state.data[index];

        if( toggled ) {

            this.setState(state => {
                state.data[index].toggled = false;
                return state;
            });
        } else {
            this.setState(state => {
                state.data[index].toggled = true;
                return state;
            });
        }
    }

    render() {
        return (
            <Section id="services">
                <SectionDiv responsive={"margin: 20px 0"}>
                    <TitleArea data-aos={"fade-up"}>
                        <SectionTitle color={"#fff"}>Support- & Serviceavtal</SectionTitle>
                    </TitleArea>
                    <Grid columns={"1fr 1fr 1fr"} gap={"20px"} align={"start"}>

                        {
                            Object.entries(this.state.data).map((item, i) => {
                                item = item[1];
                                let even = (i % 2 == 0) ? true : false;
                                return(
                                    <GridCell data-aos={"fade-" + (even ? "right" : "left")} key={i} padding={"0"}>
                                        <ServiceCard>
                                            <div>
                                                <div>
                                                    <Icon size={"3em"} icon={item.icon} />
                                                    <span>{item.title}</span>
                                                    <ToggleContainer onClick={ () => this.handleToggle(i) }>
                                                        <Icon  size={"1em"} icon={this.state.data[i].toggled ? "minus" : "plus"} />
                                                    </ToggleContainer>
                                                </div>
                                                <Textbox id={"textbox-" + i} toggled={this.state.data[i].toggled}>
                                                    <p>{item.text}</p>
                                                </Textbox>
                                            </div>
                                        </ServiceCard>
                                    </GridCell>
                                );
                            })
                        }

                    </Grid>
                </SectionDiv>
            </Section>
        );
    }
}

export default Services;