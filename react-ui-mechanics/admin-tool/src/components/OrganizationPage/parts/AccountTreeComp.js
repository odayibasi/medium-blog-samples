import React from 'react';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

import TreeItem from '@material-ui/lab/TreeItem';
import {Button} from "@material-ui/core";


export default class AccountTreeComp extends React.Component {


	constructor(props) {
		super(props);
		this.nodeMap = {};
	}

	handleNodeSelection = (nodeId) => {
		this.props.selectOrganizationNode(this.nodeMap[nodeId]);
	}

	handleAddNewNode = (parentNodeId) => {
		this.props.addNodeToOrganization(parentNodeId, {id: 'sample' + Math.random(), name: "Sample", desc: "Sample Desc"})
	}

	handleDeleteNode = (parentNodeId, node) => {
		this.props.delNodeFromOrganization(parentNodeId, node)
	}

	generateTreeItem4 = (node) => {

		const {id, name} = node;

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
			}} nodeId={id} label={name}>
				<div className='tree-item-row-container'>
					<Button size='small' onClick={(e) => this.handleAddNewNode(node.id)}><AddIcon/></Button>
					{node.parent && <Button size='small' onClick={(e) => this.handleDeleteNode(node.parent.id, node)}><DeleteIcon/></Button>}
					{vDOM}
				</div>
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
