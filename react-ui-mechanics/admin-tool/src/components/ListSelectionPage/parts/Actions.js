import React, {Component} from 'react';
import {Button, ButtonGroup} from "@material-ui/core";

export class Actions extends Component {

	render() {
		const {handleTransfer, handleTransferSelected, handleTransferUnSelected, handleClear} = this.props;
		return (
			<div className='actions-button-container'>
				<ButtonGroup
					orientation="vertical"
					color="primary"
					aria-label="vertical outlined primary button group"
				>
					<Button onClick={handleTransfer} variant="contained" color="primary">Transfer All</Button>
					<Button onClick={handleTransferSelected} variant="contained" color="primary">Transfer Selected</Button>
					<Button onClick={handleTransferUnSelected} variant="contained" color="primary">Transfer Unselected</Button>
					<Button onClick={handleClear} variant="contained" color="secondary">Clear All</Button>
				</ButtonGroup>
			</div>
		)
	}


}