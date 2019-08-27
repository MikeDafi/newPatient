import React, { Component } from 'react';
import Header from './Header';
import NoteManager from './Notes/NoteManager';
import TemplateManager from './Templates/TemplateManager';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Sidebar, SidebarItem } from 'react-responsive-sidebar';

const items = [
    <SidebarItem key=''>Dashboard</SidebarItem>,
    <SidebarItem key=''>Profile</SidebarItem>,
    <SidebarItem key=''>Settings</SidebarItem>,
];
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
                <Sidebar toggleIconSize={18} content={items} toggleIconColor='#fff' width={160} color='#fff' background='#343a40' style={{}}>
                    <Header
                        page="template"
                        userName="Berkshire National Clinic"
                    />
                    <TemplateManager />
                </Sidebar>
                {/* <Header
                        page="account"
                        userName="Berkshire National Clinic"
                    />
                <div className="container mt-1">

                    < ResponsiveDrawer />
                </div>
                <div className="container mt-10">
                    
                    <div style={{ margin: '20px' }}>
                        <TemplateManager />
                    </div>
                </div> */}
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