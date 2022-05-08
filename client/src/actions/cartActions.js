export const addToCart=(agriProduct , quantity , varient)=>(dispatch , getState) =>{


    var cartItem = {
        name : agriProduct.name,
        _id : agriProduct._id,
        image: agriProduct.image,
        varient : varient,
        quantity: Number(quantity),
        prices: agriProduct.prices,
        price : agriProduct.prices[0][varient]*quantity
    }
    
    if(cartItem.quantity>10)
    {
        alert('You cannot add more than 10 quantities')
    }else{
        if(cartItem.quantity<1)
        {
            dispatch({type:'DELETE_FROM_CART' , payload:agriProduct})
        }else{
            dispatch({type:'ADD_TO_CART' , payload : cartItem})
        }
        
    }

    


    const cartItems = getState().cartReducer.cartItems
    localStorage.setItem('cartItems' , JSON.stringify(cartItems))
}


export const deleteFromCart=(agriProduct)=> (dispatch , getState)=>{
    dispatch({type:'DELETE_FROM_CART' , payload:agriProduct})
    const cartItems = getState().cartReducer.cartItems
    localStorage.setItem('cartItems' , JSON.stringify(cartItems))
}