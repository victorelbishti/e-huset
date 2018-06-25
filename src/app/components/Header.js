
import React, { Component } from "react";
import styled from "styled-components";
import Navigation from "./Navigation";
import Logo from "../images/logotype.png";
import LogoWhite from "../images/logotype-white.png";

const HeaderWrapper = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1100;
    width: 100vw;
    
    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        z-index: -1;
        width: 100%;
        height: 100%;
        transform: scaleY(0);
        transform-origin: top;
        transition: all .8s cubic-bezier(0.4, 0.25, 0, 1);
        transition-delay: .2s;
        box-shadow: 0 0 50px 1px rgba(0,0,0,0.05);
        background: #fff;
        ${props => props.sticky ? `
            transform: scaleY(1);
        ` : ``}
    }
`;

const HeaderContainer = styled.div`
    max-width: none;
    background: transparent;
    margin: 0 50px;
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;   
`;

const LogoDiv = styled.div`
    z-index: 2;
    display: block;
    color: #fff;
    transition: all 0.4s cubic-bezier(0.4, 0.25, 0, 1);
`;

class Header extends Component {

    constructor() {
        super();

        this.state = {
            scrolling: false
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {

        if (window.scrollY === 0 && this.state.scrolling === true) {
            this.setState({scrolling: false});
        }
        else if (window.scrollY !== 0 && this.state.scrolling !== true) {
            this.setState({scrolling: true});
        }
    }

    render() {
        return (
            <HeaderWrapper sticky={this.state.scrolling}>
                <HeaderContainer>
                    <LogoDiv>
                        <a href={"/"}>
                            <img src={this.state.scrolling ? Logo : LogoWhite} alt={"E-huset.se"} width={"75"} />
                        </a>
                    </LogoDiv>
                    <Navigation sticky={this.state.scrolling} />
                </HeaderContainer>
            </HeaderWrapper>
        );
    }
};

export default Header;
