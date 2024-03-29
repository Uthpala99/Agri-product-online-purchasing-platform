import {combineReducers} from 'redux'
import {createStore , applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { getAllAgriProductsReducer  , addAgriProductReducer , getAgriProductByIdReducer , editAgriProductReducer} from './reducers/agriProductReducers'
import {composeWithDevTools } from 'redux-devtools-extension'
import { cartReducer } from './reducers/cartReducers'
import { loginUserReducer, registerUserReducer } from './reducers/userReducers'
import { placeOrderReducer  , getUserOrdersReducer , getAllOrdersReducer } from './reducers/orderReducers'

const finalReducers = combineReducers({
    getAllAgriProductsReducer : getAllAgriProductsReducer,
    cartReducer : cartReducer,
    registerUserReducer : registerUserReducer,
    loginUserReducer : loginUserReducer,
    placeOrderReducer : placeOrderReducer ,
    getUserOrdersReducer : getUserOrdersReducer,
    addAgriProductReducer : addAgriProductReducer,
    getAgriProductByIdReducer : getAgriProductByIdReducer,
    editAgriProductReducer : editAgriProductReducer,
    getAllOrdersReducer : getAllOrdersReducer
})

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null

const initialState = {

    cartReducer :{
        cartItems : cartItems
    },
    loginUserReducer :{
        currentUser : currentUser
    }
}

const composeEnhancers = composeWithDevTools({})

const store = createStore(finalReducers , initialState , composeEnhancers(applyMiddleware(thunk)))

export default store