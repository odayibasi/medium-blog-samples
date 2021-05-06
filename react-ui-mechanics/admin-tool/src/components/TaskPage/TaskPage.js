import React from 'react';
import {SideMenuContainer} from "containers";
import './TaskPage.scss'


export class TaskPage extends React.Component {

	constructor(props) {
		super(props);
	}


	render() {
		return (
			<div className='page-layout'>
				<div className='left-side'><SideMenuContainer/></div>
				<div className='right-side'>
					<h1>Task Page - {Math.random()}</h1>
				</div>
			</div>
		)
	}
}
