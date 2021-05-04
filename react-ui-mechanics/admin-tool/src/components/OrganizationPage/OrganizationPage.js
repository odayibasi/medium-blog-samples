import React from 'react';
import {AccountTreeCompContainer, ContentCompContainer, HeadComponentContainer, SideMenuContainer} from "containers";
import './OrganizationPage.scss'


export class OrganizationPage extends React.Component {

	constructor(props) {
		super(props);
	}
	
	
	componentDidMount() {
		this.props.getOrganization();
	}


	render() {
		return (
			<div className='page-layout'>
				<div className='left-side'><SideMenuContainer/></div>
				<div className='right-side'>
					<div className='head-container'>
						<HeadComponentContainer/>
					</div>
					<div className='main-container'>
						<div className='organization-tree-container'><AccountTreeCompContainer/></div>
						<div className='organization-content'><ContentCompContainer/></div>
					</div>
				</div>
			</div>
		)
	}
}
