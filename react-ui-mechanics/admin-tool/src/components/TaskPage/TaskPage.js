import React from 'react';
import {SideMenuContainer} from "containers";
import './TaskPage.scss'
import {TaskBoard} from "./parts/TaskBoard";


export class TaskPage extends React.Component {

	constructor(props) {
		super(props);
	}


	render() {
		return (
			<div className='page-layout'>
				<div className='left-side'><SideMenuContainer/></div>
				<div className='right-side'>
					<h1>Task Page</h1>
					<TaskBoard/>
				</div>
			</div>
		)
	}
}
