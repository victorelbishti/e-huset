import React, { Component } from "react";
import styled from "styled-components";
import { Section, SectionDiv, SectionTitle, Grid, GridCell, TitleArea } from "../components/Styled";
import ContactForm from "../components/ContactForm";

class Contact extends Component {

    render() {
        return (
            <Section id="contact">
                <SectionDiv border={"top"}>
                    <Grid columns={"1fr"}>
                        <GridCell padding={"40px 50px 40px 0"}>
                            <TitleArea>
                                <SectionTitle>Kontakta oss</SectionTitle>
                                <h4>Är du intresserad eller vill höra mer om våra tjänster?
                                    Du är i sådana fall välkommen att slå en signal till Adam
                                    på <u>+46 (0) 709 515 149</u>, eller skicka ett mail till info@e-huset.se så pratar vi mer!</h4>
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