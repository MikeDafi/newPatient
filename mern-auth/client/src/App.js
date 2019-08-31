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
import TemplateManager from "./components/layout/Templates/TemplateManager";
import Homepage from "./components/dashboard/Homepage";

let namE = "";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  namE = decoded.name
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
  constructor(props) {

    super(props);

    this.state = {

      name: "",

      sidebarOpen: false

    };
    this.setState({ name: namE })
    this.handleLogOut = this.handleLogOut.bind(this);

  }
  componentDidMount() {
    if (localStorage.jwtToken) {
      // Set auth token header auth
      const token = localStorage.jwtToken;
      setAuthToken(token);
      // Decode token and get user info and exp
      const decoded = jwt_decode(token);
      namE = decoded.name
      // Set user and isAuthenticated
      store.dispatch(setCurrentUser(decoded));
      this.setState({ name: namE });
      // Check for expired token
      const currentTime = Date.now() / 1000; // to get in milliseconds
      if (decoded.exp < currentTime) {
        // Logout user
        store.dispatch(logoutUser());
      }
        // // Redirect to login
        // window.location.href = "./login";
      
    
  }}

  shouldComponentUpdate() {
    if (localStorage.jwtToken) {
      // Set auth token header auth
      const token = localStorage.jwtToken;
      setAuthToken(token);
      // Decode token and get user info and exp
      const decoded = jwt_decode(token);
      if (decoded.name !== namE) {
        namE = decoded.name
      }
      // Set user and isAuthenticated
      // store.dispatch(setCurrentUser(decoded));

      // Check for expired token
      const currentTime = Date.now() / 1000; // to get in milliseconds
      if (decoded.exp < currentTime) {
        // Logout user
        store.dispatch(logoutUser());
      }
      return true
  }}
  // UNSAFE_componentWillUpdate() {
  //   if (localStorage.jwtToken) {
  //     // Set auth token header auth
  //     const token = localStorage.jwtToken;
  //     setAuthToken(token);
  //     // Decode token and get user info and exp
  //     const decoded = jwt_decode(token);
  //     this.setState({ name: decoded.namE });
  //     // Set user and isAuthenticated
  //     // store.dispatch(setCurrentUser(decoded));

  //     // Check for expired token
  //     const currentTime = Date.now() / 1000; // to get in milliseconds
  //     if (decoded.exp < currentTime) {
  //       // Logout user
  //       store.dispatch(logoutUser());
  //     }
  //     return true
  //   }
  // }

  handleLogOut() {
    store.dispatch(logoutUser());
    namE = ""
    this.setState({name:""})
  }

  templates() {
    return (
      <div >
        <SidebarResponsive name={this.state.name} />
      </div>
    );
  }

  account() {
    return (
      <div>
        <Header
          page="patients"
          userName={this.state.name}
        />
        <Dashboard/>
      </div>
    );
  }

  initialPage() {
    return (
      <Homepage
        name={this.state.name}
        logoutUser={this.handleLogOut.bind(this)}
        />
    );
  }

  patient(props) {
    // alert("hi");
    // const { name } = props.name
    return (
      <div>
        <Header
          page="patients"
          userName={this.state.name}
        />

        <div >
          <NoteManager />
        </div>

      </div>
    );
  }
  test = ({ match, location }) => {
    // alert("hi");
    // const { name } = props.name
    return (
      <>
        <p>
          <strong>Match Props: </strong>
          <code>{JSON.stringify(match, null, 2)}</code>
          <p>{match.params.name}</p>
        </p>
        <p>
          <strong>Location Props: </strong>
          <code>{JSON.stringify(location, null, 2)}</code>
        </p>
      </>
    );
  }


  render() {

    const initialPage = this.initialPage.bind(this);
    const templates = this.templates.bind(this);
    const account = this.account.bind(this);
    const patient = this.patient.bind(this);
    const test = this.test.bind(this);

    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route exact path="/" component={initialPage} />
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

                path="/patients"
                component={patient}
              />
              <PrivateRoute

                path="/patient/:name"
                component={test}
              />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
