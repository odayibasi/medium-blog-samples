import React from 'react';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';


export default class AccountTreeComp extends React.Component {

	constructor(props) {
		super(props);
	}

	generateTreeItem4 = (node) => {

		let vDOM = '';
		if (node.children && node.children.length > 0) {
			vDOM = node.children.map(child => this.generateTreeItem4(child));
		}

		const {name} = node;
		return (
			<TreeItem nodeId={name} label={name}>
				{vDOM}
			</TreeItem>
		)
	}

	render() {

		const {organization} = this.props.organization;
		
		return (
			<TreeView
				className='account-tree-container'
				defaultCollapseIcon={<ExpandMoreIcon/>}
				defaultExpandIcon={<ChevronRightIcon/>}
			>
				{this.generateTreeItem4(organization)}
			</TreeView>
		);
	}


}
