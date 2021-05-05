import React from 'react';
import TextField from '@material-ui/core/TextField';
import {Button} from "@material-ui/core";


export default class ContentComp extends React.Component {

	constructor(props) {
		super(props);
		this.state = {name: '', desc: ''};
	}

	componentWillReceiveProps(nextProps, nextContext) {
		const {selectedNode} = nextProps.organization;
		let nameDefault = selectedNode?.name;
		let descDefault = selectedNode?.desc;
		this.setState({name: nameDefault, desc: descDefault})
	}

	handleNameChange = (e) => {
		this.setState({name: e.target.value})
	}

	handleDescChange = (e) => {
		this.setState({desc: e.target.value})
	}

	handleAccept = () => {
		const {selectedNode} = this.props.organization;
		const {name, desc} = this.state;
		const updatedNode = {id: selectedNode.id, name: name, desc: desc};
		this.props.updateOrganizationNode(updatedNode);
	}

	render() {
		const {name, desc} = this.state;
		return (
			<form className='organization-content-container' noValidate autoComplete="off">
				<div>
					<TextField id="standard-basic" onChange={this.handleNameChange} value={name}/>
					<TextField id="standard-multiline-flexible" onChange={this.handleDescChange} value={desc} variant="outlined"
					           multiline rowsMax={4}/>
					<Button onClick={this.handleAccept}>Accept</Button>
				</div>
			</form>
		);
	}

}
