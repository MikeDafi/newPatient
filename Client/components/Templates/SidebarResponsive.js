import React, { Component } from 'react';
import {Sidebar,SidebarItem} from 'react-responsive-sidebar';
import Header from '../Header';
import TemplateManager from '../Templates/TemplateManager';
import { AccessAlarm, Camera, TrendingUp, Apps } from '@material-ui/icons';


class SidebarResponsive extends Component{
    handleSidebarClick() {
        return alert("Hi");
    }
    render() {

        const items = [
            <SidebarItem onClick={function(){this.handleSidebarClick(todo)}} key='' leftIcon= {<Camera/>} color='white'>Form Studio</SidebarItem>,
            <SidebarItem key='' href='/' leftIcon= {<AccessAlarm/>} color='white'>Schedule Reminders</SidebarItem>,
            <SidebarItem key='' href='/' leftIcon= {<TrendingUp/>} color='white'>Marketing Materials</SidebarItem>,
            <SidebarItem key='' href='/' leftIcon= {<Apps/>} color='white'>More Templates</SidebarItem>
        ];


        return(
            <Sidebar backdrop={false} toggleIconSize={18} content={items} toggleIconColor='#fff' width={160} color='#fff' background='#343a40' style={{}}>
                    <Header
                        page="template"
                        userName="Berkshire National Clinic"
                    />
                    <TemplateManager />
                </Sidebar>
        );
    }
}

export default SidebarResponsive;