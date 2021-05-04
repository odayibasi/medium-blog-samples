import {ORGANIZATION} from "../constants/organization";

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
		default:
			return state
	}
}
