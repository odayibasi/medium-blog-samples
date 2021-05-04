import React from 'react';
import TextField from '@material-ui/core/TextField';
import {Button} from "@material-ui/core";


export default class ContentComp extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {


		return (
			<form className='organization-content-container' noValidate autoComplete="off">
				<div>
					<TextField id="standard-basic" label="Standard"/>
					<TextField id="standard-multiline-flexible" label="Multiline" multiline rowsMax={4}/>
					<Button>Accept</Button>
				</div>
			</form>
		);
	}

}
