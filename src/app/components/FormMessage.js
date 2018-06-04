import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    padding: 15px;
    margin-bottom: 20px;
    border: 1px solid transparent;
    border-radius: 4px;
    text-align: center;
    
    ${props => (props.formValid) ? `
        color: #3c763d;
        background-color: #dff0d8;
        border-color: #d6e9c6;
    ` : `
        color: #a94442;
        background-color: #f2dede;
        border-color: #ebccd1;
    `};
    
    
    display: ${props => (props.show) ? `block` : `none`};
`;

class FormMessage extends Component {

    constructor(props){
        super(props);

        this.state = {
           closed: false
        };

        this.closeMessage = this.closeMessage.bind(this);
    }

    closeMessage(){
        this.setState({closed: true});
    }

    render() {
        return(
            <Wrapper show={this.props.showMessage} formValid={this.props.formValid}>
                <strong>{this.props.formMessage}</strong>
            </Wrapper>
        );
    }

};

export default FormMessage;