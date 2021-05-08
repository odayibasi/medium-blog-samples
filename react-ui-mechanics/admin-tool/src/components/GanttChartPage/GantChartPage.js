import React from 'react';
import {SideMenuContainer} from "containers";
import './GantChartPage.scss'
import {GanttComponent} from "./parts/GanttComponent";


export class GanttChartPage extends React.Component {

	constructor(props) {
		super(props);
	}


	render() {
		return (
			<div className='page-layout'>
				<div className='left-side'><SideMenuContainer/></div>
				<div className='right-side'>
					<h1>Gantt Chart Page</h1>
					<GanttComponent/>
				</div>
			</div>
		)
	}
}
