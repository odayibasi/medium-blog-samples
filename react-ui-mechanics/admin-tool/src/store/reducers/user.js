import {USER} from "../constants/user";

const initialState = {
    users: [],
    fetching: false,
    fetched: false,
    error: null,
};

export default function user(state = initialState, action) {
    switch (action.type) {
        case USER.GET_USER_PENDING:
            return {...state, fetching: true, fetched: false, error: null};
        case USER.GET_USER_FULFILLED:
            return {
                ...state,
                fetching: false,
                fetched: true,
                error: null,
                users: {...action.payload.data}
            };
        case USER.GET_USER_REJECTED:
            return {...state, fetching: false, fetched: false, error: action.payload};
        default:
            return state
    }
}
