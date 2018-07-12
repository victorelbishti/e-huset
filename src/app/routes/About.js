import React, { Component } from "react";
import { Section, SectionDiv, SectionTitle, Grid, GridCell, TitleArea, TextArea } from "../components/Styled";



class About extends Component {

    render() {
        return (
            <Section id="about">
                <SectionDiv>
                    <Grid>
                        <GridCell padding={"60px 0 100px 0"}>
                            <TitleArea>
                                <SectionTitle>Om oss</SectionTitle>
                            </TitleArea>
                            <TextArea>
                                <p>Bakom e-huset står Victor och Adam, två studenter med ett brinnande intresse
                                    för webbutveckling och digital kommunikation. Vi vill hjälpa er som av
                                    olika anledningar inte har tid eller möjlighet att bygga och/eller
                                    underhålla en hemsida.</p>

                                <p>“Gör en egen hemsida på 10 minuter!” brukar det kunna låta,
                                    men detta förutsätter oftast att du innehar diverse förkunskaper.
                                    Att outsourca detta via oss innebär att du som företagare frigör en
                                    massa tid för dig och din personal.</p>

                                <p>Att få ordning på sin digitala profil handlar om mycket mer än att
                                    bara ha en hemsida och är ett arbete som tar tid. Vi erbjuder därför
                                    ytterligare tjänster som sökoptimering, digital marknadsföring och
                                    annonsering i sökmotorer.</p>
                            </TextArea>
                        </GridCell>
                    </Grid>
                </SectionDiv>
            </Section>
        );
    }
}

export default About;