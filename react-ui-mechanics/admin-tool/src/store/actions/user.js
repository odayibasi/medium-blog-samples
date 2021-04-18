import {USER} from "../constants/user";
import axios from 'axios';


export function getUser(username) {
    return {
        type: USER.GET_USER,
        payload: axios.get(`http://localhost:3004/users?username=${username}`, {})
    }
}


export function resetUser(username) {
    return {
        type: USER.GET_USER_RESET,
        payload: {}
    }
}

