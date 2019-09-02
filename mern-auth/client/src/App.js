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
import { pink } from "@material-ui/core/colors";
import { Card, CardHeader } from '@material-ui/core';
import { CardContent } from "@material-ui/core";
import PdfInterface from './components/layout/FormEditor/PdfInterface';

const NoteService = require('../src/components/services/note-service');

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
      notes: [],
      selectedNote: null,
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

      this.listNotes();


      // // Redirect to login
      // window.location.href = "./login";


    }
  }

  listNotes() {
    NoteService
      .listNotes()
      .then(notes => {
        this.setState({ notes });
        return;
      })
      .catch(error => {
        console.log(error);
        return;
      });
  }

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
    }
  }
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
    this.setState({ name: "" })
  }


  PdfPage() {
    return (
      <div >
        <PdfInterface />
      </div>
    );
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
        <Dashboard />
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
    NoteService
      .findNotesByTitle(match.params.name)
      .then(note => {
        this.setState({ selectedNote: note });
        this.setState({ isEditNoteModalOpen: true });
        return;
      })
      .catch(error => {
        console.log(error);
        return;
      });
    return (
      <>
        <Card>
          <CardHeader>
            Hi
      </CardHeader>
          <CardContent>
            <b>From URL:</b><br></br>
            <strong>Match Props: </strong>
            <code>{JSON.stringify(match, null, 2)}</code>
          </CardContent>
        </Card>
        <Card style={{ boxShadow: 'None' }}>
          <CardContent>
            <br></br><b>From MONGODB:</b><br></br>
            <p>{JSON.stringify(this.state.selectedNote, null, 2)}</p>
            {/* {this.state.selectedNote.JSON.na} */}
            <strong>Location Props: </strong>
            <code>{JSON.stringify(location, null, 2)}</code>
          </CardContent>
        </Card>
      </>
    );
  }


  render() {

    const initialPage = this.initialPage.bind(this);
    const templates = this.templates.bind(this);
    const account = this.account.bind(this);
    const patient = this.patient.bind(this);
    const test = this.test.bind(this);
    const PdfPage = this.PdfPage.bind(this);

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

                path="/pdf"
                component={PdfPage}
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
