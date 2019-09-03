import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput } from 'mdbreact';
import axios from 'axios';
import { withRouter } from 'react-router';
import styled from "styled-components";

const Card = styled.div`
border-radius: 8px;
padding: 3rem;
margin: 4rem;
width: 450px;
justify-content: center;
margin-left: auto;
margin-right: auto;
box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`;

const Button = styled.button`
  height: 3rem;
  padding: 0 2rem;
  text-transform: uppercase;
  border-radius: 4px;
  border: 1px solid;
  color: white;
  font: inherit;
  cursor: pointer;
  background-color: black;
  border-color: transparent;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.0625), 0 0 2px rgba(0, 0, 0, 0.0625);
`;

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            passwordConfirm: ''
        }
        this.onChange = this.onChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        const { name, email, password, passwordConfirm } = this.state;
        const userData = { name, email, password, passwordConfirm };

        axios
            .post('https://wc-training.johnerisvillanueva.com/api/auth/signup', userData)
            .then(
                res => console.log(res)
            ).catch(error => {
                console.log(error)
            });
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
        // console.log(this.state);
    }

    render() {
        return (
            <Card>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol>
                            <form>
                                <p className="h5 text-center mb-4">Sign up</p>
                                <div className="grey-text">
                                    <MDBInput
                                        label="Your name"
                                        icon="user"
                                        name="name"
                                        group
                                        type="text"
                                        onChange={this.onChange}
                                    />
                                    <MDBInput
                                        label="Your email"
                                        icon="envelope"
                                        name="email"
                                        group
                                        type="email"
                                        onChange={this.onChange}
                                    />
                                    <MDBInput
                                        label="Your password"
                                        icon="lock"
                                        name="password"
                                        group
                                        type="password"
                                        onChange={this.onChange}
                                    />
                                    <MDBInput
                                        label="Confirm your password"
                                        icon="exclamation-triangle"
                                        name="passwordConfirm"
                                        group
                                        type="password"
                                        onChange={this.onChange}
                                    />

                                </div>
                                <div className="text-center">
                                    <Button onClick={this.handleClick}>Register</Button>
                                </div>
                            </form>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </Card>
        );
    }
}

export default withRouter(Register);