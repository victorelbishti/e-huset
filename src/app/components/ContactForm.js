import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import FormMessage from "./FormMessage";

const FieldSet = styled.fieldset`
	border: 0 none;
	border-radius: 3px;
	padding: 20px 10px;
	box-sizing: border-box;
	margin: 0 10px;
	position: relative;
`;

const TextInput = styled.input`
    padding: 15px;
	border: 1px solid #ccc;
	border-radius: 3px;
	margin-bottom: 10px;
	width: 100%;
	box-sizing: border-box;
	font-family: Proxima-Nova;
	color: #2C3E50;
	font-size: 13px;
`;

const TextArea = styled.textarea`
padding: 15px;
	border: 1px solid #ccc;
	border-radius: 3px;
	margin-bottom: 10px;
	width: 100%;
	box-sizing: border-box;
	font-family: Proxima-Nova;
	color: #2C3E50;
	font-size: 13px;
    height: 200px;
`;

const SubmitButton = styled.button`
    width: 100px;
	background: #7cccc5;
	font-weight: bold;
	color: white;
	border: 0 none;
	border-radius: 1px;
	cursor: pointer;
	padding: 10px 5px;
	margin: 10px 5px;
    font-family: Proxima-Nova-Light;
    
    &:focus, &:hover {
        box-shadow: 0 0 0 2px white, 0 0 0 3px #7cccc5;
    }
`;

class ContactForm extends Component {

    constructor(props){
        super(props);

        this.state = {
            name: '',
            email: '',
            message: '',
            formMessage: '',
            formValid: false,
            showMessage: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        console.log(this.state);
        const { name, email, message } = this.state;
        event.preventDefault();

        const emailValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        const nameValid = (name != "") ? true : false;

        if (emailValid == null || nameValid == false) {
            this.setState({
                formMessage: 'Vänligen ange korrekt namn och e-postadress.',
                formValid: false,
                showMessage: true
            });
        } else {
            this.setState({
                formMessage: 'Ditt meddelande har skickats!',
                formValid: true,
                showMessage: true
            });

            const params = new URLSearchParams();
            params.append('name', name);
            params.append('email', email);
            params.append('message', message);

            axios({
                method: 'post',
                url: '/mailer.php',
                data: params
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <FieldSet>
                    <TextInput type={"text"} name={"name"} placeholder={"Namn *"} value={this.state.name} onChange={this.handleChange} />
                    <TextInput type={"email"} name={"email"} placeholder={"E-post *"} value={this.state.email} onChange={this.handleChange} />
                    <TextArea name={"message"} placeholder={"Meddelande"} value={this.state.message} onChange={this.handleChange} />
                    <SubmitButton type={"submit"}>Skicka</SubmitButton>

                    <div>
                        <FormMessage showMessage={this.state.showMessage} formMessage={this.state.formMessage} formValid={this.state.formValid} />
                    </div>
                </FieldSet>
            </form>
        );
    }
};

export default ContactForm;