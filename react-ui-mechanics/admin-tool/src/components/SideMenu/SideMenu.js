import React from 'react';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {routes} from "routes";
import './SideMenu.scss'


import PagesIcon from '@material-ui/icons/Pages';


export class SideMenu extends React.Component {


	handleLogout = () => {
		this.props.resetUser();
		this.props.history.push(routes.landing.path);
	}


	handleDummy = () => {
		this.props.history.push(routes.dummy.path);
	}

	handleAdmin = () => {
		this.props.history.push(routes.admin.path);
	}


	render() {
		return (
			<div>
				<Drawer className='sidebar-menu-container' anchor='right'
				        variant="permanent"
				        open>
					{this.generateNavlist()}
				</Drawer>
			</div>
		);
	}


	generateNavlist = () => (
		<div className='nav-list'>
			<List>
				<ListItem onClick={this.handleAdmin} button key='admin-page-item'>
					<ListItemIcon><SupervisorAccountIcon/></ListItemIcon>
					<ListItemText className='list-text' primary='Admin Page'/>
				</ListItem>


				<ListItem onClick={this.handleDummy} button key='dummy-page-1'>
					<ListItemIcon><PagesIcon/></ListItemIcon>
					<ListItemText className='list-text' primary='Dummy 1'/>
				</ListItem>

				<ListItem onClick={this.handleDummy} button key='dummy-page-1'>
					<ListItemIcon><PagesIcon/></ListItemIcon>
					<ListItemText className='list-text' primary='Dummy 2'/>
				</ListItem>


				<ListItem onClick={this.handleDummy} button key='dummy-page-1'>
					<ListItemIcon><PagesIcon/></ListItemIcon>
					<ListItemText className='list-text' primary='Dummy 3'/>
				</ListItem>
				
			</List>


			<List>
				<ListItem onClick={this.handleLogout} button key='logout-item'>
					<ListItemIcon><ExitToAppIcon/></ListItemIcon>
					<ListItemText className='list-text' primary='Logout'/>
				</ListItem>
			</List>
		</div>
	);


}