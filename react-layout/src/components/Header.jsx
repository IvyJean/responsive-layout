import React, { Component} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const Navigation = styled.header`
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 100px 0;
  height: 140px;
  margin-bottom: 20px;
  background: black;

  .logo a {
    padding-top: 33px;
    display: flex;
    flex-direction: column;
    clear: both;
    padding-bottom: 30px;
    text-decoration: none;
    font-size: 16px;
    p {
      display: block;
      color: white;
      font-size: 30px;
    }
  }
  .gray {
    color: #ccc;
  }
  a {
    color: #222;
    transition: all 0.6s;
    color: white;
    font-size: 1em;
  }
  a:hover {
    opacity: 0.55;
  }
  
  nav {
    ul {
      display: flex;
      justify-content: space-between;
    }
    p{
      margin: 0 15px;
      justify-content: space-between;
      font-size: 1em;
      color: white;
      text-decoration: none;
      text-transform: uppercase;
    }
    a {
      font-size: 1em;
      text-decoration: none;
      .active {
        color: tomato;
      }
    }
    a.active {
      color: white;
    }
  }

  @media only screen and (max-width: 800px) {
    padding: 0px;
    .logo {
      padding-left: 15px;
      padding-top: 0px !important;
    }
  }
  @media only screen and (max-width: 600px) {
    height: auto;
    min-height: 50px;
    display: block;
    position: relative;
    .logo {
      width: 100%;
      display: block;
      padding-top: 20px;
      margin: 0px;
      margin-left: -5px;
      a {
        padding: 20px 0px;
      }
    }
  }
`;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
    }
  }

  UNSAFE_componentWillMount() {
    if (localStorage.getItem('token') != null) {
      this.setState({ isAuthenticated: true });
    }
    else {
      this.setState({ isAuthenticated: false });
    }
  }


  logout = () => {
    localStorage.removeItem("token");
    window.location.reload(true);
  }

  render() {
    // console.log(localStorage.getItem('token'));
    if (this.state.isAuthenticated === true) {
      return (
        <Navigation>
          <div className="logo">
            <Link to="/Home">
              <p>Chronos</p>
            </Link>
          </div>
          <nav className="nav">
            <Link className="active" to="/Home"><p>home</p></Link>
            <Link className="active" to="/AddArticle"><p>Article</p></Link>
            <p> | </p>
            <Link className="active" onClick={this.logout} to="/"><p>Log Out</p></Link>
          </nav>
        </Navigation>
      );
    } else {
      return (
        <Navigation>
          <div className="logo">
            <Link to="/Home">
              <p>Chronos</p>
            </Link>
          </div>
          <nav className="nav">
            <Link className="active" to="/Home"><p>home</p></Link>
            <Link className="active" to="/AddArticle"><p>Article</p></Link>
            <p> | </p>
            <Link className="active" to="/"><p>Login</p></Link>
            <Link className="active" to="/Register"><p>Register</p></Link>
          </nav>
        </Navigation>
      );
    }
    // return (
    //   <Navigation>
    //     <div className="logo">
    //       <Link to="/Home">
    //         <p>Chronos</p>
    //       </Link>
    //     </div>
    //     <nav className="nav">
    //       <Link className="active" to="/Home"><p>home</p></Link>
    //       <Link className="active" to="/AddArticle"><p>Article</p></Link>
    //       <p> | </p>
    //       {localStorage.getItem('token') ?
    //         <Link className="active" onClick={this.logout} to="/"><p>Log Out</p></Link>
    //         :
    //         <Fragment>
    //           <Link className="active" to="/"><p>Login</p></Link>
    //           <Link className="active" to="/Register"><p>Register</p></Link>
    //         </Fragment>
    //       }
    //     </nav>
    //   </Navigation>
    // );
  }
}

export default Header;
