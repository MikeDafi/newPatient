
import React, { Component } from 'react'

import Sidebar from "react-sidebar";
import Header from '../Header';
import TemplateManager from './TemplateManager';
import Button from '@material-ui/core/Button';
import { AccessAlarm, Camera, TrendingUp, Apps } from '@material-ui/icons';
const mql = window.matchMedia(`(min-width: 800px)`);







class ResponsiveDrawer extends React.Component {

  constructor(props) {

    super(props);

    this.state = {

      sidebarDocked: mql.matches,

      sidebarOpen: false

    };

 

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);

    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);

  }

 

  componentWillMount() {

    mql.addListener(this.mediaQueryChanged);

  }

 

  componentWillUnmount() {

    this.state.mql.removeListener(this.mediaQueryChanged);

  }

 

  onSetSidebarOpen(open) {

    this.setState({ sidebarOpen: open });

  }

 

  mediaQueryChanged() {

    this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });

  }

 

  render() {

    return (

      <Sidebar
      styles={{ sidebar: { background:'rgb(52, 58, 68)' } }}
        sidebar={
        <div>
            <Button style={{width:'100%', color:'white', marginLeft:'0px', textAlign:'left', marginRight:'10px', marginTop:'10px' }}>
                <Camera style={{marginLeft:'0%'}}/> Form Wizard
            </Button><br/>
            <Button style={{width:'100%', color:'white', marginLeft:'0px', textAlign:'left', marginRight:'10px' }}>
                <AccessAlarm/> Template Portal
            </Button><br/>
            <Button style={{width:'100%', color:'white', marginLeft:'0px', textAlign:'left', marginRight:'10px' }}>
                <TrendingUp/> Marketing Materials
            </Button><br/>
            <Button style={{width:'100%', color:'white', marginLeft:'0px', textAlign:'left', marginRight:'10px' }}>
                <Apps/> Get Templates
            </Button>
        </div>
    }

        open={this.state.sidebarOpen}

        docked={this.state.sidebarDocked}

        onSetOpen={this.onSetSidebarOpen}

      >
          <Header

page="template"

userName="Berkshire National Clinic"

/>
        <TemplateManager/>

      </Sidebar>

    );

  }

}



























export default ResponsiveDrawer;