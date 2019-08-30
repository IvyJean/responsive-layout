import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput } from 'mdbreact';
import axios from 'axios';
// import { Redirect } from 'react-router';
import { withRouter, Redirect } from 'react-router'
// import jwt_decode from 'jwt-decode'


import styled from "styled-components";

const Card = styled.div`
border-radius: 8px;
padding: 3rem;
margin: 4rem;
width: 500px;
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

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            user: '',
            isLogin: false,
        }
        this.onChange = this.onChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        const { email, password } = this.state;
        const userData = { email, password };

        axios
            .post('https://wc-training.johnerisvillanueva.com/api/auth/login', userData)
            .then((response) => {
                const { access_token } = response.data;
                localStorage.setItem("token", access_token);
                // this.props.requireUser(access_token);
                this.props.history.push('/Home');
                window.location.reload(true);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
        // console.log(this.state);
    }

    render() {
        // if (this.state.isLogin) {
        //     return <Redirect to={{ pathname: "/Home" }} />
        // }
        return (

            <Card>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol>
                            <form>
                                <p className="h5 text-center mb-4">Sign in</p>
                                <div className="grey-text">
                                    <MDBInput
                                        id="email"
                                        name="email"
                                        label="Type your email"
                                        icon="envelope"
                                        group type="email"
                                        onChange={this.onChange}
                                    />
                                    <MDBInput
                                        id="password"
                                        name="password"
                                        label="Type your password"
                                        icon="lock"
                                        group type="password"
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="text-center">
                                    <Button onClick={this.handleClick}>Login</Button>
                                </div>
                            </form>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </Card>
        );
    };
}

export default withRouter(Login);