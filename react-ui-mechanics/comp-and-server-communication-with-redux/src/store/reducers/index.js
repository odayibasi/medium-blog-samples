import {combineReducers} from 'redux'
import visibilityMode from './VisibilityMode'
import gitUser from './GitUser'

export default combineReducers({
    visibilityMode,
    gitUser
})