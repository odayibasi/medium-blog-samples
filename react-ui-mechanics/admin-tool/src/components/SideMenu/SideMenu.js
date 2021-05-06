import React from 'react';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ChangeHistoryIcon from '@material-ui/icons/ChangeHistory';
import FeedbackIcon from '@material-ui/icons/Feedback'
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import ListAltIcon from '@material-ui/icons/ListAlt';
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


	handleChangeHistory = () => {
		this.props.history.push(routes.history.path);
	}


	handleAdmin = () => {
		this.props.history.push(routes.admin.path);
	}

	handleDashboard = () => {
		this.props.history.push(routes.dashboard.path);
	}

	handleFeedback = () => {
		this.props.history.push(routes.feedback.path);
	}


	handleOrganization = () => {
		this.props.history.push(routes.organization.path);
	}

	handleListSelection = () => {
		this.props.history.push(routes.listselection.path);
	}


	render() {
		return (
			<div>
				<Drawer className='sidebar-menu-container' anchor='left'
				        variant="permanent"
				        open>
					{this.generateNavlist()}
				</Drawer>
			</div>
		);
	}

	isSideMenuSelected = (expectedPath) => {
		const result = this.props.match.path === expectedPath;
		return result;
	}


	generateNavlist = () => (


		<div className='nav-list'>
			<List>
				<ListItem selected={this.isSideMenuSelected(routes.admin.path)} onClick={this.handleAdmin} button
				          key='admin-page-item'>
					<ListItemIcon><SupervisorAccountIcon/></ListItemIcon>
					<ListItemText className='list-text' primary='Admin Page'/>
				</ListItem>


				<ListItem selected={this.isSideMenuSelected(routes.history.path)} onClick={this.handleChangeHistory} button
				          key='change-history'>
					<ListItemIcon><ChangeHistoryIcon/></ListItemIcon>
					<ListItemText className='list-text' primary='Change History'/>
				</ListItem>

				<ListItem selected={this.isSideMenuSelected(routes.dashboard.path)} onClick={this.handleDashboard} button
				          key='dasboard'>
					<ListItemIcon><DashboardIcon/></ListItemIcon>
					<ListItemText className='list-text' primary='Dashboard'/>
				</ListItem>

				<ListItem selected={this.isSideMenuSelected(routes.feedback.path)} onClick={this.handleFeedback} button
				          key='feedback'>
					<ListItemIcon><FeedbackIcon/></ListItemIcon>
					<ListItemText className='list-text' primary='Feedback'/>
				</ListItem>


				<ListItem selected={this.isSideMenuSelected(routes.listselection.path)} onClick={this.handleListSelection}
				          button key='list-selection'>
					<ListItemIcon><ListAltIcon/></ListItemIcon>
					<ListItemText className='list-text' primary='List Selection'/>
				</ListItem>


				<ListItem selected={this.isSideMenuSelected(routes.dummy.path)} onClick={this.handleDummy} button
				          key='dummy-page-3'>
					<ListItemIcon><PagesIcon/></ListItemIcon>
					<ListItemText className='list-text' primary='Dummy 3'/>
				</ListItem>

			</List>


			<List>
				<ListItem onClick={this.handleOrganization} button key='logout-item'>
					<ListItemIcon><AccountTreeIcon/></ListItemIcon>
					<ListItemText className='list-text' primary='Organizaiton'/>
				</ListItem>
				<ListItem onClick={this.handleLogout} button key='logout-item'>
					<ListItemIcon><ExitToAppIcon/></ListItemIcon>
					<ListItemText className='list-text' primary='Logout'/>
				</ListItem>
			</List>
		</div>
	);


}