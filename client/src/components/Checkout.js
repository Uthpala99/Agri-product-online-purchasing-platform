import React from 'react'
import { useDispatch } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import { placeOrder } from '../actions/orderActions'

export default function Checkout({subtotal}) {

    const dispatch =useDispatch()

    function tokenHandler(token){
        dispatch(placeOrder(token , subtotal))
    }

  return (
    <div>
        <StripeCheckout 
        amount={subtotal*100}
        shippingAddress 
        token={tokenHandler}
        stripeKey='pk_test_51KxR3MIC2E0K0mYHN4a2mYK3zETDNxJVZPhLZ19tDCGfHzSzOtu9u0dJFz28ZyZe3AMh0nBlySOwWIHwbY0LUJRM00P1aj1dUp'
        currency='LKR'
        >
            
            <button className='btn'>Pay Now</button>
        </StripeCheckout>
    </div>
  )
}
