import React, { Component } from "react";

// import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
// import { MDBCol, MDBBtn } from "mdbreact";
// import Container from 'react-bootstrap/Container';
import { MDBInput } from "mdbreact";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import styled from "styled-components";

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

const Card = styled.div`
border-radius: 8px;
background-color: white;
padding: 2rem;
margin: 1rem;
margin-top: 3rem;
width: 500px;
justify-content: center;
margin-left: auto;
margin-right: auto;
`;


class AddArticle extends Component {

  constructor(props) {
    super(props)
    this.state = {
          id: '',
          title: '',
          body: '',
          article: localStorage.getItem('article') ? JSON.parse(localStorage.getItem('article')) : [],
          modal: false,
        };
      this.newTitle = this.newTitle.bind(this);
      this.newBody = this.newBody.bind(this);
      this.createArticle = this.createArticle.bind(this);
    }

    toggle = () => {
      this.setState({
        modal: !this.state.modal
      });
    }    

    newTitle(e){
      this.setState({
        newTitle: e.target.value,
      });
    }

    newBody(e) {
      this.setState({
        newBody: e.target.value,
      });
    }
  
    createArticle(e) {
      e.preventDefault();

      let idEl = this.state.article.length;
      let titleEl = this.state.newTitle;
      let bodyEl = this.state.newBody;
      let articleList = localStorage.getItem('article') ? JSON.parse(localStorage.getItem('article')) : [];

      const newArticle = {
        
        id: idEl,
        title : titleEl,
        body: bodyEl,
        time: new Date().toLocaleString()
      };
      articleList.push(newArticle);
      localStorage.setItem('article', JSON.stringify(articleList));
      window.location.reload(true); //automatic reload screen
    }

  render() {
    return (
      <div>
        <Container>
          <Row className="columns">
            <Col md="2" className="column">
              <h5>FEATURED ARTICLES</h5>
              <hr />
              <div className="post">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  <br />
                  <time className="timestamp" >
                    July 17, 2019 10:00 AM
                  </time>
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  <br />
                  <time className="timestamp" >
                    July 17, 2019 10:00 AM
                  </time>
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  <br />
                  <time className="timestamp" >
                    July 17, 2019 10:00 AM
                  </time>
                </p>
                <hr />
                <h3>Categories</h3>
                <p className="fo1">Technology</p>
                <p className="fo1">Web Design</p>
                <p className="fo1">Art Ideas</p>
              </div>
            </Col>
            <Col md="7" className="column1">
              <Card>
               <p className="articlenew">Create new article</p>
                <form onSubmit={this.createArticle}>
                  <MDBInput id="title" onChange={this.newTitle} className="title" label="Title" size="lg" />
                  <MDBInput id="body" onChange={this.newBody} className="body" type="textarea" label="Content" rows="5" />
                  <Button type="submit">Post</Button>

                </form>
              </Card>
            </Col>
            {/* <Col md="7" className="column1">
              <div className="cardlong1" id="cardlong1">
                <article className="article">
                  <div>
                    <label className="field">
                      <p align="center" className="">
                        Create new Article
                                  </p>
                    </label>
                    <form onSubmit={this.createArticle}>
                      <input id="title" onChange={this.newTitle} className="title" placeholder="" />
                     <br/><br/>
                      <textarea id="body" onChange={this.newBody} className="body"
                        placeholder="Content"></textarea>

                      <div className="actions">
                        <button type="submit" className="submit-button" id="submit">
                          Post
                       </button>
                      </div>
                    </form>
                  </div>
                </article>

              </div>
            </Col> */}
            <Col md="2" className="column">
              <input
                className="form-control mr-sm-2"
                type="text"
                placeholder="Search"
                aria-label="Search"
              /><br />
              <Button>Search</Button>
              <hr />
              <br />
              {/* <img src="../components/img/cb.gif" alt="chocobo" width="100%"/> */}
              <h4  >Hi my name is Ivy! </h4>
              <p>Welcome to my blog. Sunt in culpa qui officia deseru mollit anim id est laborum.Sunt in culpa qui officia deseru mollit anim id est laborum  </p>
              <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed</p>
              <br />
              <hr />
              <p className="center">Copyright © Ivy Cocharo. <br /> 2019 All rights reserved.</p>

            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}



export default AddArticle;
