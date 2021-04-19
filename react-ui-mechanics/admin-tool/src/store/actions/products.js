import {PRODUCTS} from "../constants/products";
import axios from 'axios';


export function getProducts() {
    return {
        type: PRODUCTS.GET_PRODUCTS,
        payload: axios.get(`http://localhost:3004/products`, {})
    }
}

function deleteCall(id) {
    axios.delete(`http://localhost:3004/products/${id}`)
        .then(resp => {
            return {id: id}
        }).catch(error => {
        throw error;
    })

}


export function delProduct(id) {
    return {
        type: PRODUCTS.DEL_PRODUCT,
        payload: deleteCall(id)
    }
}


;
