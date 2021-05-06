import React from 'react';
import {SideMenuContainer} from "containers";
import './ListSelectionPage.scss'


export class ListSelectionPage extends React.Component {

	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div className='page-layout'>
				<div className='left-side'><SideMenuContainer/></div>
				<div className='right-side'>
					<h1>List Selection Page - {Math.random()}</h1>
					<div className='selection-container'>
						<div className='source-list-container'></div>
						<div className='actions-container'></div>
						<div className='target-list-container'></div>
					</div>
				</div>
			</div>
		)
	}
}
