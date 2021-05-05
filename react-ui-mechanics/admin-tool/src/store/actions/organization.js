import {ORGANIZATION} from "../constants/organization";
import axios from 'axios';


export function getOrganization() {
	return {
		type: ORGANIZATION.GET_ORGANIZATION,
		payload: axios.get(`http://localhost:3004/organization`, {})
	}
}


export function selectOrganizationNode(node) {
	return {
		type: ORGANIZATION.SELECT_ORGANIZATION_NODE,
		payload: node
	}
}


export function addNodeToOrganization(parentId, newNode) {
	return {
		type: ORGANIZATION.ADD_ORGANIZATION_NODE,
		payload: {parentId: parentId, newNode: newNode}
	}
}

export function delNodeFromOrganization(parentId, node) {
	return {
		type: ORGANIZATION.DEL_ORGANIZATION_NODE,
		payload: {parentId: parentId, deleteNode: node}
	}
}

export function updateOrganizationNode(node) {
	return {
		type: ORGANIZATION.UPDATE_ORGANIZATION_NODE,
		payload: {updateNode: node}
	}
}








