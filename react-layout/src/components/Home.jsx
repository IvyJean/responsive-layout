import React, { Component, Fragment } from "react";

// import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {Button, Modal, Form} from 'react-bootstrap';

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { MDBIcon } from "mdbreact";
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

  .comments{
    text-align: left;
    font-size: 14px;
    font-weight: bold;
  }

  .message{
    font: inherit;
    color: inherit;
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.125);
    padding: 0.7rem 1rem;
    min-height: 3rem;
    line-height: 1.5;
    border-radius: 4px;
    resize: vertical;
    width: 300px%;
  }

  .message:focus {
    border-color: black;
    outline: none;
  }

  .title{
    text-align: left;
  }

  .tStamp {
    text-align: left;
    font-size: 12px;
  }
  .body-text{
    font-size: 16px;
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

const Btn = styled.button`
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
margin-top: 2rem;
width: 500px;
justify-content: center;
margin-left: auto;
margin-right: auto;
box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);



@media screen (max-width: 600px) {
  float: none;
  text-align: center;
  width: 100%;
}
`;

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      id: '',
      title: '',
      body: '',
      articleList: localStorage.getItem('article') ? JSON.parse(localStorage.getItem('article')) : [],
      // newArticleList: localStorage.getItem('article') ? JSON.parse(localStorage.getItem('article')) : [],
      noteEditing: null,
      currentEdit: "",
      show: false,
    };
    this.handleDeleteArticle = this.handleDeleteArticle.bind(this);
    // this.setNoteEditing = this.setNoteEditing.bind(this);

    // this.handleEditArticle = this.handleEditArticle.bind(this);
    // this.onChange = this.onChange.bind(this);

     // Edit Modal
     this.handleShow = this.handleShow.bind(this);
     this.handleClose = this.handleClose.bind(this);
     this.handleEdit = this.handleEdit.bind(this);
  }

  handleDeleteArticle = indexToDelete => {
    let newArticleList = [...this.state.articleList].filter(
      (article, index) => index !== indexToDelete
    );
    this.setState({ articleList: newArticleList });
    localStorage.setItem('article', JSON.stringify(newArticleList));
  };

  // onEditSubmit(id, title, body){
  //   let newArticleList =  [...this.state.articleList];

  //   newArticleList = newArticleList.map(article => {
  //     if(article.id === id){
  //         article.title = title
  //         article.body = body
  //     }

  //     return article
  //   })

  //   this.setState({articleList: newArticleList});
  //       localStorage.setItem('article', JSON.stringify(newArticleList));
  // }

  setNoteEditing = index => {
    let newArticleList = [...this.state.articleList];

    this.setState({ noteEditing: index});
  };

  // editNote = event => {
  //   this.setState({ currentEdit: event.target.value });
  // };

  // newTitle(e){
  //   this.setState({
  //     newTitle: e.target.value,
  //   });
  // }

  // newBody(e) {
  //   this.setState({
  //     newBody: e.target.value,
  //   });
  // }

  onChange(event){
    this.setState({
        [event.target.name]: event.target.value
    })
};

handleClose(){
  this.setState({show: false});
}
handleShow(){
  this.setState({show: true});
}

  // handleEditArticle = id => {
  //   let article = localStorage.getItem('article') ? JSON.parse(localStorage.getItem('article')) : [];

  //   for (let i = 0; i < article.length; i++) {
  //     if (article[i].id === id) {

  //      const  articleLists = {
  //         id: article[i].id,
  //         title: article[i].title,
  //         body: article[i].body,
  //         time: new Date().toLocaleString()
  //       };
  //       localStorage.setItem('article', JSON.stringify(articleLists));
  //     }
  //   }
  // };

    

  render() {
    const list = this.state.articleList;
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
              {list.map((article, index) => (
                <Card key={index}>
                  {this.state.noteEditing === null ||
                    this.state.noteEditing !== index ? (
                      <Fragment>
                        <h1 className="title" id="title">{article.title}</h1>
                        <p id="tStamp" className="tStamp">Created: {article.time}</p>
                        <p className="body-text" id="body">{article.body}</p>
                        <Btn onClick={() => this.handleDeleteArticle(index)}><MDBIcon icon="trash-alt" /></Btn>
                        <Btn onClick={() => this.setNoteEditing(index)}>  <MDBIcon icon="edit" /></Btn>
                      </Fragment>
                    ) : (
                      <Fragment>
                        <input
                          type="text"
                          value={this.state.title}
                          name= "title"
                          onChange = {event => this.onChange(event)} /> <br /><br />
                        <textarea
                          className="body-text"
                          id="body"
                          name="body"
                          value={this.state.body}
                          onChange = {event => this.onChange(event)} /> <br /><br />
                        <Btn onClick={() => this.handleEditArticle(index.id)}>Done</Btn>
                        <Btn onClick={() => this.handleDeleteArticle(index)}><MDBIcon icon="trash-alt" /></Btn>
                      </Fragment>
                    )}
                  <hr />
                  <p className="comments">Comments</p>
                  <form>
                    <label className="field">
                      <textarea className="message" placeholder="Write a comment&hellip;"></textarea>
                    </label>
                    <br />
                    <div className="actions">
                      <Btn type="submit">Post</Btn>
                    </div>
                  </form>
                </Card>
              )
              )}
            </Col>
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

export default Home;


