import React, { Component } from 'react';
import Header from './Header';
import NoteManager from './Notes/NoteManager';
import TemplateManager from './Templates/TemplateManager';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Sidebar, SidebarItem } from 'react-responsive-sidebar';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';
import { setCurrentUser, logoutUser } from '../actions/authActions';

import { Provider } from 'react-redux';
import store from '../store';


import Navbar from './layout/Navbar';
import Landing from './layout/Landing';
import Register from './auth/Register';
import Login from './auth/Login';

const items = [
    <SidebarItem key=''>Dashboard</SidebarItem>,
    <SidebarItem key=''>Profile</SidebarItem>,
    <SidebarItem key=''>Settings</SidebarItem>,
];

import PrivateRoute from './private-route/PrivateRoute';
import Dashboard from './dashboard/Dashboard';// Check for token to keep user logged in
if (localStorage.jwtToken) {
    // Set auth token header auth
    const token = localStorage.jwtToken;
    setAuthToken(token);
    // Decode token and get user info and exp
    const decoded = jwt_decode(token);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));// Check for expired token
    const currentTime = Date.now() / 1000; // to get in milliseconds
    if (decoded.exp < currentTime) {
        // Logout user
        store.dispatch(logoutUser());    // Redirect to login
        window.location.href = './login';
    }
}


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
                        page='template'
                        userName='Berkshire National Clinic'
                    />
                    <TemplateManager />
                </Sidebar>
                {/* <Header
                        page='account'
                        userName='Berkshire National Clinic'
                    />
                <div className='container mt-1'>

                    < ResponsiveDrawer />
                </div>
                <div className='container mt-10'>
                    
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
                    page='account'
                    userName='Berkshire National Clinic'
                />
                <div className='container mt-5'>
                    ACCOUNT
                </div>

            </div>
        );
    }

    initialPage() {
        return (
            <div>

                <Header
                    page='patients'
                    userName='Berkshire National Clinic'
                />
                <div className='container mt-5'>
                    <NoteManager />
                </div>
            </div>
        );
    }

    patient(props) {
        // alert('hi');
        // const { name } = props.name
        return (
            <div>
                <Header
                    page='templates'
                    userName='Berkshire National Clinic'
                />

                <div className='container mt-5'>
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
                    <div className='App'>
                        <Navbar />
                        <Route exact path='/' component={Landing} />
                        <Route exact path='/register' component={Register} />
                        <Route exact path='/login' component={Login} />
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

                            path='/initialPage'
                            component={initialPage}
                        />
                        <Route

                            path='/p/:name'
                            component={patient}
                        />
                        <Switch>
                            <PrivateRoute exact path='/dashboard' component={Dashboard} />
                        </Switch>
                    </div>
                </Router>
            </Provider>

        );
    }


}