import React from 'react';
import {SideMenuContainer} from "containers";
import {CenteredGrid} from './Layout'
import './DashboardPage.scss'



export class DashboardPage extends React.Component {

	constructor(props) {
		super(props);
	}


	render() {
		return (
			<div className='page-layout'>
				<div className='left-side'><SideMenuContainer/></div>
				<div className='right-side'>
					<h1>Dashboard</h1>
					<CenteredGrid/>
				</div>
			</div>
		)
	}
}
