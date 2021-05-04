import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';


export default class HeadComponent extends React.Component {

	constructor(props) {
		super(props);
	}
	
	generateArrFromNodePath = (node, arrOfNodes) => {
		if (node.parent) {
			this.generateArrFromNodePath(node.parent, arrOfNodes);
		}
		arrOfNodes.push(node);
	}
	
	render() {
		const {selectedNode} = this.props.organization;
		const arrOfNodes = [];
		this.generateArrFromNodePath(selectedNode, arrOfNodes)
		const LinkVDOM = arrOfNodes.map(el => <Link color="inherit" href="/">{el.name}</Link>);

		return (
			<Breadcrumbs aria-label="breadcrumb">
				{LinkVDOM}
			</Breadcrumbs>
		);
	}
}