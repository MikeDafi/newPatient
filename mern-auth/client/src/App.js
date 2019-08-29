import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import SidebarResponsive from './components/layout/Templates/SidebarResponsive'
import NoteManager from './components/layout/Notes/NoteManager';
import Header from './components/Header';
import "./App.css";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}
class App extends Component {



  templates() {
    return (
      <div >
        <SidebarResponsive />
      </div>
    );
  }

  account() {
    return (
      <div>
        <Header
          page="patients"
          userName="Berkshire National Clinic"
        />
        <div className="container mt-5">
          ACCOUNT
            </div>

      </div>
    );
  }

  initialPage() {
    return (
      <div>

        <Header
          page="patients"
          userName="Berkshire National Clinic"
        />
        <div className="container mt-5">
          <NoteManager />
        </div>
      </div>
    );
  }

  patient(props) {
    // alert("hi");
    // const { name } = props.name
    return (
      <div>
        <Header
          page="templates"
          userName="Berkshire National Clinic"
        />

        <div className="container mt-5">
          PATIENT {props.match.params.name}
        </div>

      </div>
    );
  }


  render() {

    const initialPage = this.initialPage.bind(this);
    const templates = this.templates.bind(this);
    const account = this.account.bind(this);
const patient = this.patient.bind(this);

    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={templates} />
              />
              <PrivateRoute
                exact
                path='/templates'
                component={templates}
              />

              <PrivateRoute
                exact
                path='/account'
                component={account}
              />

              <PrivateRoute

                path="/p/:name"
                component={patient}
              />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
