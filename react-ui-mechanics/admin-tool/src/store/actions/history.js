import {HISTORY} from "../constants/history";
import axios from 'axios';


export function getHistory() {
    return {
        type: HISTORY.GET_HISTORY,
        payload: axios.get(`http://localhost:3004/history`, {})
    }
}



