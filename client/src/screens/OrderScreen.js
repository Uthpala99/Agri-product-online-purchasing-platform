import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserOrders } from '../actions/orderActions'
import Loading from './Loading'
import Error from './Error'
import axios from 'axios'

export default function OrderScreen() {

  const dispatch = useDispatch()

  const orderstate = useSelector(state => state.getUserOrdersReducer)
  const { orders, error, loading } = orderstate



  useEffect(() => {
    dispatch(getUserOrders())


  }, [])


  function deleteOrder(orderid) {
    axios.post('http://localhost:8000/api/orders/deleteorder' , {orderid})
      .then(response => { 
        alert("Order Cancel Successfully");
        window.location.reload(false);
        console.log(response.data)
      });
    }

  return (

    <div className="wrapper" >
      <div style={{ marginTop: "70px" }}>
        <h2 style={{ fontSize: "35px" }}>My Orders</h2>
        <hr />

        <div className="row justify-content-center">
          {loading && (<Loading />)}
          {error && (<Error error="something went wrong" />)}
          {orders && orders.map(order => {
            return <div className="col-md-8 m-2 rounded-lg" style={{
              backgroundColor: "dimgray",
              color: "white"
            }}>
              <div className="flex-container">
                <div className="text-left w-100 m-1 p-1" >
                  <h1 style={{ fontSize: "25px" }}>Agri Product</h1>
                  <hr />
                  {order.orderItems.map(item => {
                    return <div >
                      <p>{item.name} * {item.quantity} = {item.price}</p>
                      <img src={item.image} className="img-fluid mb-3" style={{height:'100px' , width:'100px'}} alt="" />
                    </div>
                  })}
                </div>



                <div className="text-left w-100 m-1 p-1 ">

                  <h1 style={{ fontSize: "25px" }}>Address</h1>
                  <hr />
                  <p>Street : {order.shippingAddress.street}</p>
                  <p>City : {order.shippingAddress.city}</p>
                  <p>Country : {order.shippingAddress.country}</p>
                  <p>Zipcode : {order.shippingAddress.pincode}</p>
                </div>


                <div className="text-left w-100 m-1 p-1 ">

                  <h1 style={{ fontSize: "25px" }}>Order Info</h1> <hr />
                  <p>Order Amount : Rs. {order.orderAmount} /=</p>
                  <p>Payment Date : {order.createdAt.substring(0, 10)}</p>
                  <p>Transaction ID : {order.transactionId}</p>
                  <p>Order ID : {order._id}</p>


                  <button className="btn btn-danger"
                    onClick={() => {deleteOrder(order._id) }} >
                      <i className="fa fa-trash" style={{ color: "white" }}></i>
                      &nbsp; Cancel Order
                    </button>


                </div>

               
              </div>
            </div>

          })}

        </div>


      </div>
    </div>
  )
}
