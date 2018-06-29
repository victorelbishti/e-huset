
import React, { Component } from "react";
import Icon from "../components/Icon";
import {SectionDiv, SectionTitle, Grid, GridCell, TitleArea, ServiceCard, Overlay, size, colors} from "../components/Styled";
import styled from "styled-components";
import AOS from "aos";
import bgImg from "../images/bg-photo.jpeg"

const Section = styled.section`
    display: flex;
    align-items: center;
    position: relative;
    padding: 50px 0;
    background: url(${bgImg}) no-repeat center center fixed;
    background-size: cover;
    
    @media (max-width: ${size.small}) {
        margin: 0;
        padding: 20px 40px;
    }
`;

const PhotoOverlay = styled(Overlay)`
    height: 100%;
    width: 100%;
    background: #000;
    opacity: .7;
`;

const FilterOverlay = styled(Overlay)`
    height: 100%;
    width: 100%;
`;

class Services extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: {
                0: {
                    title: "Licenskostnader",
                    text: `Vi står för alla licenskostnader (teman, tillägg etc) som behövs för att bygga och driva er hemsida.`,
                    icon: "credit_card",
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
                    text: `Varje månad uppdaterar vi WordPress, temat och de
                    tillägg som är installerade på er webbplats för att minimera
                    risken för buggar och intrång.`,
                    icon: "update",
                    toggled: false
                },
                3: {
                    title: "Utbildning",
                    text: `Vi guidar och förklarar hur du enkelt kan ta hand om er hemsida och byta ut innehåll.`,
                    icon: "computer",
                    toggled: false
                },
                4: {
                    title: "Backup / Säkerhetskopiering",
                    text: `Backups av er hemsida sker varje månad. Alla backuper lagras i 90 dagar.`,
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
                <PhotoOverlay/>
                <FilterOverlay />
                <SectionDiv responsive={"margin: 20px 0"}>
                    <TitleArea data-aos={"fade-up"}>
                        <SectionTitle color={"#fff"}>Support- & Serviceavtal</SectionTitle>
                    </TitleArea>
                    <Grid columns={"1fr 1fr 1fr"} gap={"20px"} align={"start"}>

                        {
                            Object.entries(this.state.data).map((item, i) => {
                                item = item[1];
                                return(
                                    <GridCell data-aos={"fade-up"} key={i} padding={"0"}>
                                        <ServiceCard>
                                            <div>
                                                <span>{item.title}</span>
                                                <p>{item.text}</p>
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