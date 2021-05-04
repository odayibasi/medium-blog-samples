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




