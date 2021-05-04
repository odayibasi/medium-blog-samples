import React from 'react';
import {SideMenuContainer} from "containers";
import './OrganizationPage.scss'
import HeadComponent from "./parts/HeadComponent";
import AccountTreeComp from "./parts/AccountTreeComp";
import ContentComp from "./parts/ContentComp";


export class OrganizationPage extends React.Component {

	constructor(props) {
		super(props);
	}


	render() {
		return (
			<div className='page-layout'>
				<div className='left-side'><SideMenuContainer/></div>
				<div className='right-side'>
					<div className='head-container'>
						<HeadComponent/>
					</div>
					<div className='main-container'>
						<div className='organization-tree-container'><AccountTreeComp/></div>
						<div className='organization-content'><ContentComp/></div>
					</div>
				</div>
			</div>
		)
	}
}
