import React from 'react';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';


export default class AccountTreeComp extends React.Component {


	constructor(props) {
		super(props);
		this.nodeMap = {};
	}

	handleNodeSelection = (nodeId) => {
		this.props.selectOrganizationNode(this.nodeMap[nodeId]);
	}

	generateTreeItem4 = (node) => {

		const {name} = node;

		//Fast Access Store in Arr
		this.nodeMap[name] = node;

		let vDOM = '';
		if (node.children && node.children.length > 0) {
			vDOM = node.children.map(child => {
					child.parent = node;
					return this.generateTreeItem4(child)
				}
			);
		}

		return (
			<TreeItem onClick={(e) => {
				this.handleNodeSelection(name)
			}} nodeId={name} label={name}>
				{vDOM}
			</TreeItem>
		)
	}

	render() {

		this.nodeMap = {}; //clear node arr; //Fast access
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
