import React from 'react';
import SourceList from "./SourceList";
import {Actions} from "./Actions";
import TargetList from "./TargetList";

export class ListSelectionComp extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			sourceList: [1, 2, 3, 4, 5], sourceSelects: [2, 4], targetList: [1, 3],
		}
	}

	//==== ACTIONS BUTTON HANDLER
	handleTransfer = () => {
		this.setState({targetList: [...this.state.sourceList]})
	}

	handleTransferSelected = () => {
		this.setState({targetList: [...this.state.sourceSelects]})
	}


	handleTransferUnSelected = () => {
		const {sourceList, sourceSelects} = this.state;
		const unSelectedList = sourceList.filter(el => !sourceSelects.includes(el));
		this.setState({targetList: [...unSelectedList]})
	}

	handleClear = () => {
		this.setState({targetList: []})
	}


	//SOURCE SELECTION HANDLER
	handleToggleSelection = (value) => {
		const {sourceSelects} = this.state;
		const currentIndex = sourceSelects.indexOf(value);
		const newSelects = [...sourceSelects];

		if (currentIndex === -1) {
			newSelects.push(value);
		} else {
			newSelects.splice(currentIndex, 1);
		}

		this.setState({sourceSelects: newSelects})
	};


	render() {

		const {sourceList, sourceSelects, targetList} = this.state;

		return (
			<div className='selection-container'>
				<div className='source-list-container'>
					<SourceList
						sourceList={sourceList}
						sourceSelects={sourceSelects}
						handleToggleSelection={this.handleToggleSelection}
					/></div>
				<div className='actions-container'>
					<Actions
						handleTransfer={this.handleTransfer}
						handleTransferSelected={this.handleTransferSelected}
						handleTransferUnSelected={this.handleTransferUnSelected}
						handleClear={this.handleClear}/>
				</div>
				<div className='target-list-container'>
					<TargetList
						targetList={targetList}
					/>
				</div>
			</div>
		)
	}
}