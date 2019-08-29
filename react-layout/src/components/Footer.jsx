import React, { Component } from 'react';
import styled from "styled-components";
// import {Row} from 'mdbreact'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Fragment = styled.footer`
    padding-bottom: 130px;
    text-align: center;
    background-color: black;
    margin-top: 20px;
    color: white;
    font-size: 12px;
    bottom: 0;
`;

const Container = styled.div`
  align-items: center;

  .columns {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin: 5px 0;
  }

  p {
    font-size: 14px;
  }

  .articlenew {
    font-weight: bold;
    font-size: 16px
  }

  .column {
    flex: 1;
    margin: 2px;
    text-align: center;
    padding: 0 1rem;
    padding-top: 1rem;

    time {
      font-size: 12px;
      color: gray;
    }
  }

  .column1 {
    text-align: center;
    background-color: rgb(243, 245, 247);
    border-radius: 8px;
    flex: 1;
  }
`;

class Footer extends Component {

    render() {
        return (
            <div>
                <Fragment>
                    <Container>
                        <Row>
                        <Col md="2" className="column">
                            <p>Col 1</p>
                        </Col>
                        <Col md="7" className="column">
                        <p>Col 1</p>
                        </Col>
                        <Col md="2" className="column">
                        <p>Col 1</p>
                        </Col>
                        </Row>
                    </Container>
                </Fragment>
            </div>
            )
        };
      
    }
    
    
    export default Footer;