import React, { Component } from "react";
import styled from "styled-components";
import Scroll from "smoothscroll";

const Nav = styled.nav `
    font-family: 'Proxima-Nova-Bold', sans-serif;
    position: relative;
    top: inherit;
    right: inherit;
    width: auto;
    height: auto;
    max-width: inherit;
    transform: scaleX(1);
    background-color: transparent;
`;

const ListItem = styled.li`
    display: inline;
    margin-right: 40px;
`;

const NavLink = styled.a`
    text-decoration: none;
    ${props => props.sticky ? `color: #000;` : `color: #fff;`}
    position: relative;
    transition: all 0.4s cubic-bezier(0.4, 0.25, 0, 1);
    
    &:hover {
        ${props => props.sticky ? `color: #2c7dbc;` : `color: #fff;`}
                
        &:before {
            margin-top: 5px;
            opacity: 1;
            transition-delay: 0.125s;
        }
    }
    
    &:before {
        content: '';
        position: absolute;
        top: 100%;
        width: 100%;
        height: 3px;
        margin-top: 25px;
        opacity: 0;
        ${props => props.sticky ? `background-color: #2c7dbc;` : `background-color: #fff;`}
        transition: all 0.5s cubic-bezier(0.4, 0.25, 0, 1);
    }
`;

const navItems = {
    features: 'Våra paket',
    references: 'Referenser',
    contact: 'Kontakta oss'
};

class Navigation extends Component {

    constructor() {
        super();

        this.handleClickEvent = this.handleClickEvent.bind(this);
    }

    handleClickEvent(elementName){

        let element = document.querySelector('#' + elementName);
        let offset = element.offsetTop - 100;
        Scroll(offset, 1000);
    }

    render() {
        return (
            <Nav id={this.props.sticky ? 'true' : 'false'}>
                <ul>
                    {
                        Object.keys(navItems).map((item, i) => {
                            let items = Object.entries(navItems)[i];
                            return(
                                <ListItem key={ i }>
                                    <NavLink sticky={this.props.sticky} href="#" onClick={ () => this.handleClickEvent(items[0]) }>{ items[1] }</NavLink>
                                </ListItem>
                            );
                        })
                    }
                </ul>
            </Nav>
        );
    }
};

export default Navigation;