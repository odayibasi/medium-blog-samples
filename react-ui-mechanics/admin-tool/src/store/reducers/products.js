import {PRODUCTS} from "../constants/products";

const initialState = {
    products: [],
    fetching: false,
    fetched: false,
    error: null,
};

export default function products(state = initialState, action) {
    switch (action.type) {
        case PRODUCTS.GET_PRODUCTS_PENDING:
            return {...state, fetching: true, fetched: false, error: null};
        case PRODUCTS.GET_PRODUCTS_FULFILLED:
            return {
                ...state,
                fetching: false,
                fetched: true,
                error: null,
                products: [...action.payload.data]
            };
        case PRODUCTS.GET_PRODUCTS_REJECTED:
            return {...state, fetching: false, fetched: false, error: action.payload};
        default:
            return state
    }
}
