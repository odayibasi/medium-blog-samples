import {ORGANIZATION} from "../constants/organization";

const initialState = {
    organization: {},
    fetching: false,
    fetched: false,
    error: null,
};

export default function organization(state = initialState, action) {
    switch (action.type) {
        case ORGANIZATION.GET_USER_PENDING:
            return {...state, fetching: true, fetched: false, error: null};
        case ORGANIZATION.GET_USER_FULFILLED:
            return {
                ...state,
                fetching: false,
                fetched: true,
                error: null,
                organization: {...action.payload.data}
            };
        case ORGANIZATION.GET_USER_REJECTED:
            return {...state, fetching: false, fetched: false, error: action.payload};
        default:
            return state
    }
}
