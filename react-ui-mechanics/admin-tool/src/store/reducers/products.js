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
        case PRODUCTS.ADD_PRODUCT_PENDING:
        case PRODUCTS.UPDATE_PRODUCT_PENDING:
            return {...state, fetching: true, fetched: false, error: null};
        case PRODUCTS.GET_PRODUCTS_REJECTED:
        case PRODUCTS.DEL_PRODUCT_REJECTED:
        case PRODUCTS.ADD_PRODUCT_REJECTED:
        case PRODUCTS.UPDATE_PRODUCT_REJECTED:
            return {...state, fetching: false, fetched: false, error: action.payload};
        case PRODUCTS.GET_PRODUCTS_FULFILLED:
            return {
                ...state,
                fetching: false,
                fetched: true,
                error: null,
                products: [...action.payload.data]
            };
        case PRODUCTS.ADD_PRODUCT_FULFILLED:
            const nextProducts = [...state.products];
            nextProducts.push(action.payload.data);

            return {
                ...state,
                fetching: false,
                fetched: true,
                error: null,
                products: nextProducts
            };
        case PRODUCTS.DEL_PRODUCT_FULFILLED:
            const products = [...state.products];
            const filtered = products.filter(el => el.id !== action.payload.data.id);
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
