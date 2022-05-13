import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllOrders , deliverOrder } from '../actions/orderActions'
import Loading from './Loading'


export default function OrdersList() {

  const dispatch = useDispatch()
  const getordersstate = useSelector(state => state.getAllOrdersReducer)
  const {loading , error , orders} =getordersstate

  useEffect(() => {
    dispatch(getAllOrders())

  }, [])

  return (
    <div>
      <h2 style={{ fontSize: "35px" }}>OrdersList</h2>
      {loading && (<Loading />)}
      {error ? (<div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Invalid Credentials ! </strong>
      </div>) : ''}
      <table className='table table-striped table-bordered'>
        <thead className='thead-dark'>
          <tr>
            <th>Order Id</th>
            <th>Email</th>
            <th>User Id</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders && orders.map(order =>{
            return <tr>
              <td>{order._id}</td>
              <td>{order.email}</td>
              <td>{order.userid}</td>
              <td>Rs : {order.orderAmount}</td>
              <td>{order.createdAt.substring(0 , 10 )}</td>
              <td>{order.isDelivered ? (
              <h1>Delivered</h1>
              ) : (
              <button className='btn' onClick={() => dispatch(deliverOrder(order._id))}>Deliver</button>)}</td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}
