import {VISIBILITY_MODE} from "../constants/VisibilityMode";

const baseState = {
    visible: true,
};

const visibilityMode = (state = baseState, action) => {
    switch (action.type) {
        case VISIBILITY_MODE.SHOW:
            return {...state, visible: true}
        case VISIBILITY_MODE.HIDE:
            return {...state, visible: false}
        default:
            return state
    }
}

export default visibilityMode