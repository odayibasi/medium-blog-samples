import {VISIBILITY_MODE} from "../constants/VisibilityMode";

export const show = () => ({
    type: VISIBILITY_MODE.SHOW,
})

export const hide = () => ({
    type: VISIBILITY_MODE.HIDE,
})