import {ORGANIZATION} from "../constants/organization";
import React from "react";

const initialState = {
	organization: {},
	selectedNode: {},
	fetching: false,
	fetched: false,
	error: null,
};

export default function organization(state = initialState, action) {
	switch (action.type) {
		case ORGANIZATION.GET_ORGANIZATION_PENDING:
			return {...state, fetching: true, fetched: false, error: null};
		case ORGANIZATION.GET_ORGANIZATION_FULFILLED:
			return {
				...state,
				fetching: false,
				fetched: true,
				error: null,
				organization: {...action.payload.data}
			};
		case ORGANIZATION.GET_ORGANIZATION_REJECTED:
			return {...state, fetching: false, fetched: false, error: action.payload};
		case ORGANIZATION.SELECT_ORGANIZATION_NODE:
			return {...state, fetching: false, fetched: false, error: null, selectedNode: action.payload};
		case ORGANIZATION.ADD_ORGANIZATION_NODE:
		case ORGANIZATION.DEL_ORGANIZATION_NODE:
		case ORGANIZATION.UPDATE_ORGANIZATION_NODE:
			return processClientAction(state, action.type, action.payload)
		default:
			return state
	}
}

function addNode2Tree(parentId, node, newNode) {

	if (!node.children) node.children = [];

	if (node.id === parentId) {
		node.children.push(newNode);
	} else {
		node.children.forEach(el => {
			addNode2Tree(parentId, el, newNode)
		})
	}
}


function deleteNodeFromTree(parentId, node, deleteNode) {

	if (!node.children) node.children = [];

	if (node.id === parentId) {
		const index = node.children.findIndex(el => el.id === deleteNode.id);
		node.children.splice(index, 1);
	} else {
		node.children.forEach(el => {
			deleteNodeFromTree(parentId, el, deleteNode)
		})
	}
}


function updateNode(node, updatedNode) {

	if (!node.children) node.children = [];

	if (node.id === updatedNode.id) {
		node.name = updatedNode.name;
		node.desc = updatedNode.desc;
	} else {
		node.children.forEach(el => {
			updateNode(node, updatedNode)
		})
	}
}


function processClientAction(state, type, data) {
	const organization = {...state.organization};

	if (type === ORGANIZATION.ADD_ORGANIZATION_NODE) {
		addNode2Tree(data.parentId, organization, data.newNode)
	} else if (type === ORGANIZATION.DEL_ORGANIZATION_NODE) {
		deleteNodeFromTree(data.parentId, organization, data.deleteNode);
	} else if (type === ORGANIZATION.UPDATE_ORGANIZATION_NODE) {
		updateNode(organization, data.updateNode);
	}

	return {
		...state,
		fetching: false,
		fetched: true,
		error: null,
		organization: organization
	};
}

