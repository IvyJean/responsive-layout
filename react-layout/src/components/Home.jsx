import React, { Component } from "react";

// import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

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

  .field > .label::after {
    content: " ";
    display: block;
    margin-bottom: 0.5rem;
  }
  
  .field > input {
    width: 100%;
  }
  
  .field > textarea {
    width: 100%;
    box-sizing: border-box;
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
margin-top: 2rem;
width: 500px;
justify-content: center;
margin-left: auto;
margin-right: auto;
`;

class Home extends Component {

  constructor(props) {
    super(props)
    this.textAreaRefs = [];
    this.state = {
      id: '',
      title: '',
      body: '',
      articleList: localStorage.getItem('article') ? JSON.parse(localStorage.getItem('article')) : [],
      newArticleList: localStorage.getItem('article') ? JSON.parse(localStorage.getItem('article')) : [],
    };
    this.handleDeleteArticle = this.handleDeleteArticle.bind(this);
    // this.editArticle = this.editArticle.bind(this);
  }



  handleDeleteArticle(i) {
    let newArticleList = this.state.articleList.slice(0);
    let data = newArticleList.indexOf(i);
    if (data > -1) {
      newArticleList.splice(data, 1);
      this.setState({ articleList: newArticleList });
      localStorage.setItem('article', JSON.stringify(newArticleList));
    }
  }



//   handleEditArticle(e){
//     let data = this.state.articleList;

//     this.setState((prevState) => {
//       localStorage.setItem('article', JSON.stringify(prevState.data + 1));
//       return{
//         article: data,
//         completedCount: prevState.data + 1
//       }
//     });
// }

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
                <Card>
                  <h1 className="title" id="title">{article.title}</h1>
                  <p id="tStamp" className="tStamp">Created: {article.time}</p>
                  <p className="body-text" id="body">{article.body}</p>
                  <Button type="submit" onClick={this.handleDeleteArticle.bind(this, article)}>Delete</Button>
                  {/* <Button type="submit" onClick={this.editArticle.bind(this, article)}>Edit</Button> */}
                  {/* <Button type="submit" onClick={this.handleEditArticle.bind(this, article)}>Edit</Button> */}
                  <hr />
                  <h4>Comments</h4>
                  <form>
                    <label className="field">
                      <textarea className="message" placeholder="Write a comment&hellip;"></textarea>
                    </label>
                    <br />
                    <div className="actions">
                      <Button type="submit">Post</Button>
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


