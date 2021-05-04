import {ORGANIZATION} from "../constants/organization";
import axios from 'axios';


export function getOrganization(username) {
    return {
        type: ORGANIZATION.GET_ORGANIZATION,
        payload: axios.get(`http://localhost:3004/organization`, {})
    }
}



