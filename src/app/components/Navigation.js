import React, { Component } from "react";
import styled from "styled-components";
import Scroll from "smoothscroll";
import { size, colors } from "./Styled";
import Icon from "./Icon";
import Modal from "./Modal";

export const navItems = {
    features: 'Vad vi gör',
    services: 'Support- & Serviceavtal',
    reference: 'Tidigare projekt',
    contact: 'Kontakta oss'
};

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
    
    > ul {
        @media (max-width: ${size.medium}) {
            display: none;
        }
    }
`;

const ListItem = styled.li`
    display: inline;
    margin-right: 40px;
`;

const MobileListItem = styled.li`
    line-height: 70px;
    list-style-type: none;
    vertical-align: middle;
    text-align: center;
`;

const NavLink = styled.a`
    text-decoration: none;
    ${props => props.sticky ? `color: #000;` : `color: #fff;`}
    position: relative;
    transition: all 0.4s cubic-bezier(0.4, 0.25, 0, 1);
    
    &:hover {
        ${props => props.sticky ? `color: ${colors.fresh};` : `color: #fff;`}
                
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
        ${props => props.sticky ? `background-color: ${colors.fresh};` : `background-color: #fff;`}
        transition: all 0.5s cubic-bezier(0.4, 0.25, 0, 1);
    }
`;

const MobileNavLink = styled(NavLink)`
    color: #fff;
    font-size: 1.5rem;
`;

const MobileIconContainer = styled.div`
    display: none;

    @media (max-width: ${size.medium}) {
        display: block;
    }

    svg {
        fill: ${props => (props.sticky) ? `#000` : `#fff`};
        width: 2em;
        height: 2em;
    }
`;

const ModalIconContainer = styled(MobileIconContainer)`
    position: fixed ;
    right: 50px;
    top: 45px;
    
    svg {
        fill: #fff;
    }
`;

const MobileNav = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10000;
    color: #fff;
    background: rgba(0,0,0,.75);
    overflow-y: scroll;
    
    > ul {
        text-align: center;
        height: 100vh;
        width: 100%;
        padding: 0;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
`;

class Navigation extends Component {

    constructor() {
        super();

        this.state = {
          showModal: false,
        };

        this.handleMenuClickEvent = this.handleMenuClickEvent.bind(this);
        this.handleMobileMenuClickEvent = this.handleMobileMenuClickEvent.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleHide = this.handleHide.bind(this);
    }

    handleMenuClickEvent(elementName){
        let element = document.querySelector('#' + elementName);
        let offset = element.offsetTop - 100;
        Scroll(offset, 1000);
    }

    handleMobileMenuClickEvent(elementName) {
        this.handleHide(event);
        this.handleMenuClickEvent(elementName);
    }

    handleShow(event) {
        event.preventDefault();
        this.setState({showModal: true});
    }

    handleHide(event) {
        event.preventDefault();
        this.setState({showModal: false});
    }

    render() {

        // Show a Modal on click.
        // (In a real app, don't forget to use ARIA attributes
        // for accessibility!)
        const modal = this.state.showModal ? (
            <Modal>
                <MobileNav>
                    <ModalIconContainer sticky={this.props.sticky}>
                        <a href={"#"} onClick={this.handleHide}>
                            <Icon icon={"hamburger"} />
                        </a>
                    </ModalIconContainer>
                    <ul>
                        {
                            Object.keys(navItems).map((item, i) => {
                                let items = Object.entries(navItems)[i];
                                return(
                                    <MobileListItem key={ i }>
                                        <MobileNavLink href="#" onClick={ () => this.handleMobileMenuClickEvent(items[0]) }>{ items[1] }</MobileNavLink>
                                    </MobileListItem>
                                );
                            })
                        }
                    </ul>
                </MobileNav>
            </Modal>
        ) : null;

        return (
            <Nav>

                <MobileIconContainer sticky={this.props.sticky}>
                    <a href={"#"} onClick={this.handleShow}>
                        <Icon icon={"hamburger"} />
                    </a>
                </MobileIconContainer>
                {modal}

                <ul>
                    {
                        Object.keys(navItems).map((item, i) => {
                            let items = Object.entries(navItems)[i];
                            return(
                                <ListItem key={ i }>
                                    <NavLink sticky={this.props.sticky} href="#" onClick={ () => this.handleMenuClickEvent(items[0]) }>{ items[1] }</NavLink>
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