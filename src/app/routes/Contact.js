import React, { Component } from "react";
import styled from "styled-components";
import { SectionDiv, Grid, GridCell, TitleArea, Section } from "../components/Styled";
import ContactForm from "../components/ContactForm";

class Contact extends Component {

    render() {
        return (
            <Section id="contact">
                <SectionDiv border={"top"}>
                    <Grid columns={"1fr"}>
                        <GridCell padding={"40px 50px 40px 0"}>
                            <TitleArea>
                                <h2>Kontakta oss</h2>
                                <h4>Lorum ipsum ac diam sit amet, orum ipsum ac diam sit amet.
                                    Suspendisse placerat tellus a odio hendrerit, eget dictum enim sollicitudin.</h4>
                            </TitleArea>

                            <ContactForm/>
                        </GridCell>
                    </Grid>
                </SectionDiv>
            </Section>
        );
    }
}

export default Contact;