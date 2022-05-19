import React from "react";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { placeOrder } from "../actions/orderActions";
import Loading from "../screens/Loading";

export default function Checkout({ subtotal }) {
  const orderstate = useSelector((state) => state.placeOrderReducer);
  const { loading, error, success } = orderstate;
  const dispatch = useDispatch();

  function tokenHandler(token) {
    dispatch(placeOrder(token, subtotal));
  }

  return (
    <div>
      {loading && <Loading />}
      {success ? (
        <div
          class="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          <strong>Your Order Placed Successfully </strong>
        </div>
      ) : (
        ""
      )}
      {error ? (
        <div
          class="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          <strong>Email already registered </strong>
        </div>
      ) : (
        ""
      )}
      <StripeCheckout
        amount={subtotal * 100}
        shippingAddress
        token={tokenHandler}
        stripeKey="pk_test_51KxR3MIC2E0K0mYHN4a2mYK3zETDNxJVZPhLZ19tDCGfHzSzOtu9u0dJFz28ZyZe3AMh0nBlySOwWIHwbY0LUJRM00P1aj1dUp"
        currency="LKR"
      >
        <button className="btn">Pay Now</button>
      </StripeCheckout>

      <di>
        <form onSubmit={sendEmail}>
          <input type="submit" value="Send" />
        </form>
      </di>
    </div>
  );
}
