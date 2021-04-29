import {HISTORY} from "../constants/history";
import axios from 'axios';


export function getHistory() {
    return {
        type: HISTORY.GET_HISTORY,
        payload: axios.get(`http://localhost:3004/history`, {})
    }
}


export function addHistoryItem(historyItem) {
    return {
        type: HISTORY.ADD_HISTORY_ITEM,
        payload: axios.post(`http://localhost:3004/history/`, historyItem, {})
    }
}

