import {PRODUCTS} from "../constants/products";
import axios from 'axios';


export function getProducts() {
    return {
        type: PRODUCTS.GET_PRODUCTS,
        payload: axios.get(`http://localhost:3004/products`, {})
    }
}

