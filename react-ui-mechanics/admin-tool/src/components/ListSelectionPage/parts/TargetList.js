import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default class TargetList extends React.Component {

	render() {
		const {targetList} = this.props;

		const vDOM = targetList.map(el => (<ListItem button><ListItemText primary={`Line Item ${el}`}/></ListItem>));
		return (
			<div className='target-list'>
				<List component="nav">
					{vDOM}
				</List>
			</div>
		);
	}


}