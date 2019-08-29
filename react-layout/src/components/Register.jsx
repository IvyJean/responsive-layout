import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput } from 'mdbreact';

import styled from "styled-components";

const Card = styled.div`
border-radius: 8px;
background-color: rgb(243, 245, 247);
padding: 3rem;
margin: 4rem;
width: 500px;
justify-content: center;
margin-left: auto;
margin-right: auto;
border-bottom: 5px solid slategrey;
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
        this.state = {}
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
                                        group
                                        type="text"

                                    />
                                    <MDBInput
                                        label="Your email"
                                        icon="envelope"
                                        group
                                        type="email"

                                    />
                                    <MDBInput
                                        label="Your password"
                                        icon="lock"
                                        group
                                        type="password"

                                    />
                                    <MDBInput
                                        label="Confirm your password"
                                        icon="exclamation-triangle"
                                        group
                                        type="text"

                                    />

                                </div>
                                <div className="text-center">
                                    <Button color="primary">Register</Button>
                                </div>
                            </form>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </Card>
        );
    }
}

export default Register;