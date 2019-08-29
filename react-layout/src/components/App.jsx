import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import Header from './Header.jsx';
import Home from './Home.jsx';
import AddArticle from './AddArticle.jsx';
import Footer from './Footer.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';
import PrivateRoute from './PrivateRoute.jsx';


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      title: '',
      body: '',
      isAuthenticated: false,
    }
    this.requireUser = this.requireUser.bind(this);
  }

  requireUser = (userData) => {
    console.log('userData', userData);
    if (userData) {
      this.setState({
        isAuthenticated: true,
      })
    }
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact={true} path="/" component={Login}
              render={() => {
                return <Login requireUser={this.requireUser} />
              }} />
            <Route exact path="/Register" component={Register}
              render={() => (
                <Register />
              )}
            />

            <PrivateRoute path='/Home' component={Home} auth={localStorage.getItem("token")} />
            <PrivateRoute path='/AddArticle' component={AddArticle} auth={localStorage.getItem("token")} />

            <Route path="*" component={() => <Login />} />

          </Switch>
          <Footer />
        </div>
      </Router>
    )
  };

}

export default App;
