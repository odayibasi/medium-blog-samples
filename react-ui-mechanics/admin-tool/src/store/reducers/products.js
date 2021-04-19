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
        case PRODUCTS.DEL_PRODUCT_PENDING:
            return {...state, fetching: true, fetched: false, error: null};
        case PRODUCTS.GET_PRODUCTS_REJECTED:
        case PRODUCTS.DEL_PRODUCT_REJECTED:
            return {...state, fetching: false, fetched: false, error: action.payload};
        case PRODUCTS.GET_PRODUCTS_FULFILLED:
            return {
                ...state,
                fetching: false,
                fetched: true,
                error: null,
                products: [...action.payload.data]
            };
        case PRODUCTS.DEL_PRODUCT_FULFILLED:
            const products = [...state.products];
            const filtered = products.filter(el => el.id === action.payload.data.id);
            return {
                ...state,
                fetching: false,
                fetched: true,
                error: null,
                products: [...filtered]
            };


        default:
            return state


    }
}
