import {combineReducers} from 'redux'
import user from './user.js'
import products from './products.js'


export default combineReducers({
    user,
    products,
})
