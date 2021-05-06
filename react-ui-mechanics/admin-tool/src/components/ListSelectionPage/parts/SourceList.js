import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import {TextField} from "@material-ui/core";


export default class SourceList extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			filterText: '',
		}
	}

	handleChange = (e) => {
		this.setState({filterText: e.target.value})
	}


	render() {
		const {sourceList, sourceSelects, handleToggleSelection} = this.props;
		const {filterText} = this.state;

		const filteredSourceList = sourceList.filter(el => `Line item ${el}`.includes(filterText))

		return (
			<div class="source-list">
				<TextField id="standard-search" label="Search field" type="search" onChange={this.handleChange}/>
				<List>
					{filteredSourceList.map((value) => {
						const labelId = `checkbox-list-label-${value}`;

						return (
							<ListItem key={value} dense button onClick={(e) => {
								console.log('clicked');
								handleToggleSelection(value)
							}}>
								<ListItemIcon>
									<Checkbox
										edge="start"
										checked={sourceSelects.indexOf(value) !== -1}
										tabIndex={-1}
										disableRipple
										inputProps={{'aria-labelledby': labelId}}
									/>
								</ListItemIcon>
								<ListItemText id={labelId} primary={`Line item ${value}`}/>
							</ListItem>
						);
					})}
				</List>
			</div>

		);

	}


}