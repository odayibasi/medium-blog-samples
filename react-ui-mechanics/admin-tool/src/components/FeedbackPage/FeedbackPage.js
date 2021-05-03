import React from 'react';
import {SideMenuContainer} from "containers";
import './FeebackPage.scss'
import {CustomizedSnackbars} from "./Feedbacks/Feedbacks";
import {Button} from "@material-ui/core";


export class FeedbackPage extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			isSnackBarOpen: false,
			severity: 'success',
		}
	}

	handleOpen = (flag, severity) => {
		this.setState({isSnackBarOpen: flag, severity: severity});
	}

	render() {

		const {isSnackBarOpen, severity} = this.state;
		return (
			<div className='page-layout'>
				<div className='left-side'><SideMenuContainer/></div>
				<div className='right-side'>
					<h1>Feedback Page</h1>
					<CustomizedSnackbars severity={severity} open={isSnackBarOpen} handleOpen={this.handleOpen}/>
					<div className='button-container'>
						<Button variant="outlined" color='primary' onClick={(e) => {this.handleOpen(true, 'success')}}>Give Success Message </Button>
						<Button variant="outlined" color='secondary' onClick={(e) => {this.handleOpen(true, 'error')}}>Give Error Message</Button>
						<Button variant="outlined" color='default' onClick={(e) => {this.handleOpen(true, 'warning')}}>Give Warning Message</Button>
						<Button variant="outlined" color='default' onClick={(e) => {this.handleOpen(true, 'info')}}>Give Info Message</Button>
					</div>
				</div>
			</div>
		)
	}
}
