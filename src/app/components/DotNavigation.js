import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
    position: relative;
	display: inline-block;
	margin: 0;
	padding: 0;
	list-style: none;
	cursor: default;
`;

const ListItem = styled.li`
    position: relative;
	display: block;
	float: left;
	margin: 0 16px;
	width: 16px;
	height: 16px;
	cursor: pointer;
`;

const Link = styled.a`
    top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	outline: none;
	border-radius: 50%;
	background-color: #fff;
	background-color: rgba(255,255,255,0.3);
	text-indent: -999em;
	cursor: pointer;
	position: absolute;
	overflow: hidden;
	background-color: rgba(0,0,0,0);
	box-shadow: inset 0 0 0 2px rgba(255,255,255,1);
	transition: background 0.3s;
	
	&:after {
        content: '';
        position: absolute;
        bottom: 0;
        height: ${props => (props.current) ? '100%' : '0'};
        left: 0;
        width: 100%;
        background-color: #fff;
        box-shadow: 0 0 1px #fff;
        transition: height 0.3s;
	}
	
	&:hover, &:focus {
	    background-color: rgba(0,0,0,0.2);
    }
`;


export default class DotNavigation extends React.PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <List>
                {
                    Object.keys(this.props.items).map((index) => {

                        return(
                            <ListItem key={index}>
                                <Link current={(this.props.current == index)}>{index}</Link>
                            </ListItem>
                        );
                    })
                }
            </List>
        );
    }
}