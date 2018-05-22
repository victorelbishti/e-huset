import React, { Component } from "react";
import styled from "styled-components";
import { Grid, SectionDiv, OneHalfCell, VerticalLine } from "./Styled";

const Footer = styled.footer`
    display: flex;
    align-items: center;
    background-image: linear-gradient(-140deg, #2c7dbc 15%, #7cccc5 70%);
`;

class Header extends Component {

    render() {
        return (
            <Footer>
                <SectionDiv>
                    <Grid>
                        <OneHalfCell>
                            <h3>Vivamus suscipit tortor eget felis porttitor volutpat.</h3>
                        </OneHalfCell>
                        <OneHalfCell>
                            <h4>E-post: info@e-huset.se</h4>
                            <h4>Telefon: (+)46 70 12 34 567</h4>
                        </OneHalfCell>
                    </Grid>
                </SectionDiv>
            </Footer>
        );
    }
};

export default Header;