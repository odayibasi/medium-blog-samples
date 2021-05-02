import React from 'react';
import {SideMenuContainer} from "containers";
import './FeebackPage.scss'


export class FeedbackPage extends React.Component {

	constructor(props) {
		super(props);
	}


	render() {
		return (
			<div className='page-layout'>
				<div className='left-side'><SideMenuContainer/></div>
				<div className='right-side'>
					<h1>Feedback Page</h1>
				</div>
			</div>
		)
	}
}
