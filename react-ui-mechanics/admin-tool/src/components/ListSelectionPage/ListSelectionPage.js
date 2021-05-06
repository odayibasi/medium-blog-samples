import React from 'react';
import {SideMenuContainer} from "containers";
import './ListSelectionPage.scss'
import {ListSelectionComp} from "./parts/ListSelectionComp";


export class ListSelectionPage extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='page-layout'>
				<div className='left-side'><SideMenuContainer/></div>
				<div className='right-side'>
					<h1>List Selection Page</h1>
					<ListSelectionComp/>
				</div>
			</div>
		)
	}
}
