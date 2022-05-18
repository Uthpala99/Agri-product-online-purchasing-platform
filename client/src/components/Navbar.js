import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../actions/cartActions'
import {logoutUser} from '../actions/userActions'


function Navbar() {

  const cartstate = useSelector(state => state.cartReducer)
  const userstate = useSelector(state => state.loginUserReducer)
  const { currentUser } = userstate
  const dispatch = useDispatch()

  return (
    <div>
      <nav class="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-body rounded">
        <a class="navbar-brand" href="/">AGRI PRODUCT ONLINE PURCHASING PLATFORM</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">

            {currentUser ? (
              <div className="dropdown mt-2">
                <a  style={{}} className="dropdown-toggle" 
                  type="button" 
                  id="dropdownMenuButton" 
                  data-toggle="dropdown" 
                  aria-haspopup="true" 
                  aria-expanded="false"
                >
                  {currentUser.name}
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" href="/orders">Orders</a>
                  <a className="dropdown-item" href="#" onClick={()=>{dispatch(logoutUser())}}>Logout</a>
                  {currentUser.isAdmin ? ( <a className="dropdown-item" href="/admin">Admin Dashboard</a>):""}
                </div>
                
              </div> ) : (
              <li class="nav-item active">
                <a class="nav-link" href="/login">Login</a>
              </li>)}

            <li class="nav-item">
              <a class="nav-link" href="/cart">
                Cart {cartstate.cartItems.length}</a>
            </li>

          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;