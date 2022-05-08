import {combineReducers} from 'redux'
import {createStore , applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { getAllAgriProductsReducer } from './reducers/agriProductReducers'
import {composeWithDevTools } from 'redux-devtools-extension'
import { cartReducer } from './reducers/cartReducers'
import { registerUserReducer } from './reducers/userReducers'

const finalReducers = combineReducers({
    getAllAgriProductsReducer : getAllAgriProductsReducer,
    cartReducer : cartReducer,
    registerUserReducer : registerUserReducer
})

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const initialState = {

    cartReducer :{
        cartItems : cartItems
    }
}

const composeEnhancers = composeWithDevTools({})

const store = createStore(finalReducers , initialState , composeEnhancers(applyMiddleware(thunk)))

export default store