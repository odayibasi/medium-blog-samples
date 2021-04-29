import React from 'react';
import {SideMenuContainer, ProductHistoryTableContainer} from "containers";
import './HistoryPage.scss'

export class HistoryPage extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='page-layout'>
				<div className='left-side'>
					<SideMenuContainer/>
				</div>
				<div className='right-side'>
					<h1>History Page</h1>
					<ProductHistoryTableContainer/>
				</div>
			</div>
		)
	}
}
