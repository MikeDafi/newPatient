import React, { Component } from 'react';
import Header from './Header';
import NoteManager from './Notes/NoteManager';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SidebarResponsive from './Templates/SidebarResponsive'

export default class App extends Component {

    constructor() {
        super();

        this.state = {
            title: 'React Starter',
            description: 'A basic template that consists of the essential elements that are required to start building a React application'
        };
    }

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
                    page="account"
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

            <Router>
                <Route
                    exact
                    path='/'
                    component={initialPage}
                />
                <Route
                    exact
                    path='/templates'
                    component={templates}
                />

                <Route
                    exact
                    path='/account'
                    component={account}
                />

                <Route

                    path="/p/:name"
                    component={patient}
                />
            </Router>


        );
    }


}