import {HISTORY} from "../constants/history";

const initialState = {
    history: [],
    fetching: false,
    fetched: false,
    error: null,
};

export default function history(state = initialState, action) {
    switch (action.type) {
        case HISTORY.GET_HISTORY_PENDING:
            return {...state, fetching: true, fetched: false, error: null};
        case HISTORY.GET_HISTORY_FULFILLED:
            return {
                ...state,
                fetching: false,
                fetched: true,
                error: null,
                history: [...action.payload.data]
            };
        case HISTORY.GET_HISTORY_REJECTED:
            return {...state, fetching: false, fetched: false, error: action.payload};
        default:
            return state
    }
}
