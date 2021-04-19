import {PRODUCTS} from "../constants/products";
import axios from 'axios';


export function getProducts() {
    return {
        type: PRODUCTS.GET_PRODUCTS,
        payload: axios.get(`http://localhost:3004/products`, {})
    }
}


export function addProduct(id, product) {
    return {
        type: PRODUCTS.ADD_PRODUCT,
        payload: axios.post(`http://localhost:3004/products/${id}`, product, {})
    }
}

export function updProduct(id, product) {
    return {
        type: PRODUCTS.UPDATE_PRODUCT,
        payload: axios.put(`http://localhost:3004/products/${id}`, product, {})
    }
}

//Handle Own Dispach Because JSON Server return {} empty object when Delete
//If you implement your backend server and it returns id below function structure NOT NEEDED
export function dispatchDelProduct(dispatch, id) {
    dispatch({type: PRODUCTS.DEL_PRODUCT_PENDING, payload: {data: {id: id}}})
    dispatch({type: 'TEMP', payload: axios.delete(`http://localhost:3004/products/${id}`)})
        .then(response => {
            dispatch({type: PRODUCTS.DEL_PRODUCT_FULFILLED, payload: {data: {id: id}}})
        })
        .catch(err => {
            dispatch({type: PRODUCTS.DEL_PRODUCT_REJECTED, payload: err})
        });
};
