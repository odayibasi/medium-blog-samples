import React from 'react';
import {SideMenuContainer} from "containers";
import './SchedulingPage.scss'
import {DndCalendarSchedular} from "./parts/DndCalendarSchedular";


export class SchedulingPage extends React.Component {

	constructor(props) {
		super(props);
	}


	render() {

		return (
			<div className='page-layout'>
				<div className='left-side'><SideMenuContainer/></div>
				<div className='right-side'>
					<h1>Scheduling Page</h1>
					<div className='schedule-container'>
						<DndCalendarSchedular/>
					</div>
				</div>
			</div>
		)
	}
}
