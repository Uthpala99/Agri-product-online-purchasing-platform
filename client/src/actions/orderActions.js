import axios from "axios"
export const placeOrder=(token , subtotal)=> async (dispatch , getState) =>{

    dispatch({type:"PLACE_ORDER_REQUEST"})
    const currentUser = getState().loginUserReducer.currentUser
    const cartItems = getState().cartReducer.cartItems
    try {
        const response = await axios.post('http://localhost:8000/api/orders/placeorder' , {token , subtotal , currentUser, cartItems  })
        console.log(response);
        dispatch({type:"PLACE_ORDER_SUCCESS"})
    } catch (error) {
        dispatch({type:"PLACE_ORDER_FAILED"})
        console.log(error)
    }
}