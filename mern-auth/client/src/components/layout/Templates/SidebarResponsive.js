
import React, { Component } from 'react'

import Sidebar from "react-sidebar";
import Header from '../../Header';
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

 

  // componentWillUnmount() {

  //   this.state.mql.removeListener(this.mediaQueryChanged);

  // }

 

  onSetSidebarOpen(open) {

    this.setState({ sidebarOpen: open });

  }

 

  mediaQueryChanged() {

    this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });

  }

 

  render() {

    return (

      <div>
        <Header

          page="template"

          userName={this.props.name}

        />

        <Sidebar
          shadow={false}
          styles={{ sidebar: { background: 'rgb(52, 58, 68)', position:'absolute', width:'201px' } }}
          sidebar={
            <div>
              {/* hiiii
            <button >
                <Camera style={{marginLeft:'0%'}}/> Form Wizard
            </button>  */}
              <br /><br />
              <Button style={{ width: '100%', color: 'white', marginLeft: '0px', textAlign: 'left', height: '50px'}}>
                <AccessAlarm /> Template Portal
            </Button><br />
              <Button style={{ width: '100%', color: 'white', marginLeft: '0px', textAlign: 'left', height: '50px' }}>
                <TrendingUp /> Marketing Materials
            </Button><br />
              <Button style={{ width: '100%', color: 'white', marginLeft: '0px', textAlign: 'left', height:'50px' }}>
                <Apps /> Get Templates
            </Button>
            </div>
          }

          open={this.state.sidebarOpen}

          docked={this.state.sidebarDocked}

          onSetOpen={this.onSetSidebarOpen}

        >

          <TemplateManager />

        </Sidebar>
      </div>

    );

  }

}



























export default ResponsiveDrawer;