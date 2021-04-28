import React from 'react';
import {SideMenuContainer} from "containers";

export class DummyPage extends React.Component {

	constructor(props) {
		super(props);
	}
	

	render() {
		return (
			<div>
				<h1>Dummy Page - {Math.random()}</h1>
				<SideMenuContainer/>
			</div>
		)
	}
}
