import React, { Component } from "react";
import styled from "styled-components";

import { SectionDiv } from "../components/Styled";

const Section = styled.section`
    display: flex;
    align-items: center;
    padding: 50px 0;
`;

class Contact extends Component {
    render() {
        return (
            <Section id="contact">
                <SectionDiv>
                    <h2>Contact</h2>
                </SectionDiv>
            </Section>
        );
    }
}

export default Contact;