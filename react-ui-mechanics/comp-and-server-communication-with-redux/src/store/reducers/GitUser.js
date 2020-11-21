import {GIT_USER} from "../constants/GitUser";

const initialState = {
    gitUser: {},
    fetching: false,
    fetched: false,
    error: null,
};

export default function gitUser(state = initialState, action) {
    switch (action.type) {
        case GIT_USER.GET_GIT_USER_PENDING:
            return {...state, fetching: true, fetched: false, error: null};
        case GIT_USER.GET_GIT_USER_FULFILLED:
            return {
                ...state,
                fetching: false,
                fetched: true,
                error: null,
                gitUser: {...action.payload.data}
            };
        case GIT_USER.GET_GIT_USER_REJECTED:
            return {...state, fetching: false, fetched: false, error: action.payload};
        default:
            return state
    }
}