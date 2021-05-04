import React from 'react';
import TextField from '@material-ui/core/TextField';
import {Button} from "@material-ui/core";


export default class ContentComp extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		const {selectedNode} = this.props.organization;
		let name = selectedNode?.name;
		let desc = selectedNode?.desc;


		return (
			<form className='organization-content-container' noValidate autoComplete="off">
				<div>
					<TextField id="standard-basic"  value={name}/>
					<TextField id="standard-multiline-flexible" variant="outlined" value={desc}  multiline rowsMax={4}/>
					<Button>Accept</Button>
				</div>
			</form>
		);
	}

}
