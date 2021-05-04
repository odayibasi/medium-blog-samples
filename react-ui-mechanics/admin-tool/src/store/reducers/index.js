import {combineReducers} from 'redux'
import user from './user.js'
import products from './products.js'
import history from './history.js'
import organization from './organization.js'


export default combineReducers({
	user,
	products,
	history,
	organization
})
