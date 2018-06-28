import React, { Component } from "react";
import styled from "styled-components";
import { Grid, SectionDiv, GridCell, VerticalLine, WhiteLink } from "./Styled";

const Footer = styled.footer`
    display: flex;
    align-items: center;
    background: #333;
    padding: 50px 0 20px 0;
    color: #FFF;
    text-align: center;
    border-top: 10px solid #E8E8E8;
`;

const FooterDiv = styled.div`
    display: block;
    margin-top: 40px;
    text-align: center;
    border-top: 1px solid #fff;
`;

const FooterCard = styled.div`
    margin: 10px 20px;
    display: inline-block;
    
    p, a {
        font-size: 22px;
        color: #fff;
        margin: 0;
    }
`;

const FooterCardTitle = styled.h4`
    margin: 0;
    margin-bottom: 3px;
    color: #ffffff;
    font-size: 13px;
    text-transform: uppercase;
`;

class Header extends Component {

    render() {
        return (
            <Footer>
                <SectionDiv>
                    <FooterCard marginTop={"0"}>
                        <FooterCardTitle>E-POST</FooterCardTitle>
                        <a href={"mailto:info@e-huset.se"}>info@e-huset.se</a>
                    </FooterCard>
                    <FooterCard>
                        <FooterCardTitle>TELEFON</FooterCardTitle>
                        <a href={"tel:+46709515149"}>+46 (0) 709 515 149</a>
                    </FooterCard>
                    <FooterDiv>
                        <p>Copyright 2018 <WhiteLink href="http://e-huset.se/">E-huset.se</WhiteLink> | All Rights Reserved</p>
                    </FooterDiv>
                </SectionDiv>
            </Footer>
        );
    }
};

export default Header;