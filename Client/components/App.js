import React, { Component } from 'react';
import Header from './Header';
import NoteManager from './Notes/NoteManager';
import { BrowserRouter, Route } from 'react-router-dom';

export default class App extends Component {

    constructor() {
        super();

        this.state = {
            title: 'React Starter',
            description: 'A basic template that consists of the essential elements that are required to start building a React application'
        };
    }

    templates(){
        return (
            <div>
               HI
            </div>
        );
    }

    initialPage(){
        return (
            <div>
                
                <Header />
                <div className="container mt-5">
                    <NoteManager />
                </div>
            </div>
        );
    }

    render() {

        const initialPage = this.initialPage.bind(this);
        const templates = this.templates.bind(this);

        return (

            <BrowserRouter>
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
            </BrowserRouter>


        );
    }


}