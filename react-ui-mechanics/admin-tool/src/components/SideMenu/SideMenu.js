import React from 'react';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import './SideMenu.scss'
import {routes} from "../../routes";


export class SideMenu extends React.Component {


	handleLogout = () => {
		this.props.resetUser();
		this.props.history.push(routes.landing.path);
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
		<div
			className='nav-list'
			role="presentation"
		>
			<List>
				<ListItem button key='admin-page-item'>
					<ListItemIcon><SupervisorAccountIcon/></ListItemIcon>
					<ListItemText primary='Admin Page'/>
				</ListItem>
				<ListItem onClick={this.handleLogout} button key='logout-item'>
					<ListItemIcon><ExitToAppIcon/></ListItemIcon>
					<ListItemText primary='Logout'/>
				</ListItem>
			</List>
		</div>
	);


}