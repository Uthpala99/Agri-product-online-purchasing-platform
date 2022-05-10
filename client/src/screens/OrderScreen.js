import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserOrders } from '../actions/orderActions'
import Loading from './Loading'

export default function OrderScreen() {

  const dispatch = useDispatch()
  const orderstate = useSelector(state => state.getUserOrderReducer)
  const { orders, error, loading } = orderstate

  useEffect(() => {
    dispatch(getUserOrders())
  }, [])


  return (
    <div>
      <h2 style={{ fontSize: '35px' }}>My Orders</h2>
      <div className='row justify-center' >
        {/* {loading && (<Loading />)}
        {error ? (<div class="alert alert-danger alert-dismissible fade show" role="alert">
          <strong>Something Went Wrong ! </strong>
        </div>) : ''}  */}
        {orders && orders.map(order => {
          return <div className='col-md-8'>
            <div className='flex-container'>
              <div>
                <h2 style={{ fontSize: '25px' }}>Items</h2>
                {order.orderItems.map(item => {
                  return <div>
                  {item.name}
                    
                    {/* <h1>{item.name} [{item.varient}] * {item.quantity} = {item.price} </h1> */}
                  </div>
                })} 
              </div>
              <div>
              </div>
              <div>
              </div>
            </div>
          </div>
        })}
        </div>
      </div>
      )
}
