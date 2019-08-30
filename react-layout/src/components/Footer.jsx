import React, { Component } from 'react';
import { MDBIcon, MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import styled from "styled-components";

const A = styled.div`
  a {
    color: #222;
    transition: all 0.6s;
    color: white;
    font-size: 1em;
  }
  a:hover {
    opacity: 0.55;
  }
`;

class Footer extends Component {

  render() {
    return (
      <MDBFooter color="black" className="font-small pt-4 mt-4">
        <br />
        <MDBContainer fluid className="text-center text-md-center">
          <MDBRow>
            <MDBCol md="6">
              <h5 className="title">Details</h5>
              <A>
                <ul>
                  <a href="#!" className="fb-ic mr-3">
                    FAQ
                  </a>
                  <a href="#!" className="fb-ic mr-3">
                    Disclaimer
                  </a>
                  <a href="#!" className="fb-ic mr-3">
                    Support Policy
                  </a>
                </ul>
              </A>
              <br />
            </MDBCol>
            <MDBCol md="5">
              <h5 className="title">Follow Me</h5>
              <A>
                <MDBContainer>
                  <a href="#!" className="fb-ic mr-3">
                    <MDBIcon fab icon="facebook-f" />
                  </a>
                  <a href="#!" className="tw-ic mr-3">
                    <MDBIcon fab icon="twitter" />
                  </a>
                  <a href="#!" className="li-ic mr-3">
                    <MDBIcon fab icon="linkedin-in" />
                  </a>
                  <a href="#!" className="ins-ic mr-3">
                    <MDBIcon fab icon="instagram" />
                  </a>
                  <a href="#!" className="pin-ic mr-3">
                    <MDBIcon fab icon="pinterest" />
                  </a>
                  <a href="#!" className="git-ic mr-3">
                    <MDBIcon fab icon="github" />
                  </a>
                  <a href="#!" className="dribbble-ic mr-3">
                    <MDBIcon fab icon="dribbble" />
                  </a>
                </MDBContainer>
              </A>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <br />
      </MDBFooter>

    )
  };

}


export default Footer;