import {combineReducers} from 'redux'
import user from './user.js'
import products from './products.js'
import history from './history.js'


export default combineReducers({
	user,
	products,
	history,
})
