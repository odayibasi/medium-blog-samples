import React from 'react';
import {SideMenuContainer} from "containers";
import './OrganizationPage.scss'


export class OrganizationPage extends React.Component {

	constructor(props) {
		super(props);
	}


	render() {
		return (
			<div className='page-layout'>
				<div className='left-side'><SideMenuContainer/></div>
				<div className='right-side'>
					<h1>Organization Page</h1>
				</div>
			</div>
		)
	}
}
