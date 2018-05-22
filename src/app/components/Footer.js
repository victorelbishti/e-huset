import React, { Component } from "react";
import styled from "styled-components";
import { Grid, SectionDiv, GridCell, VerticalLine } from "./Styled";

const Footer = styled.footer`
    display: flex;
    align-items: center;
    background-image: linear-gradient(-140deg, #2c7dbc 15%, #7cccc5 70%);
    padding: 100px 0 20px 0;
    color: #FFF;
`;

const FooterDiv = styled.div`
    margin-top: 100px;
    text-align: center;
    border-top: 1px solid #fff;
`;

const FooterCard = styled.div`
    margin-top: ${props => props.marginTop};
    
    > h4 {
        margin: 0;
        margin-bottom: 3px;
        color: #ffffff;
        font-size: 13px;
        text-transform: uppercase;
    }
    
    p, a {
        font-size: 22px;
        color: #fff;
        margin: 0;
    }
`;

class Header extends Component {

    render() {
        return (
            <Footer>
                <SectionDiv>
                    <Grid columns={"1fr 1fr"}>
                        <GridCell padding={"40px 50px 40px 0"}>
                            <h3>Vivamus suscipit tortor eget felis porttitor volutpat.</h3>
                        </GridCell>
                        <GridCell padding={"40px 0 40px 50px"}>
                            <VerticalLine background={"#fff"} side={"left"}/>
                            <FooterCard marginTop={"0"}>
                                <h4>E-POST</h4>
                                <a href={"mailto:info@e-huset.se"}>info@e-huset.se</a>
                            </FooterCard>
                            <FooterCard marginTop={"40px"}>
                                <h4>TELEFON</h4>
                                <p>+46 (0) 701 234 567</p>
                            </FooterCard>
                        </GridCell>
                    </Grid>
                    <FooterDiv>
                        <p>E-huset.se Copyright</p>
                    </FooterDiv>
                </SectionDiv>
            </Footer>
        );
    }
};

export default Header;