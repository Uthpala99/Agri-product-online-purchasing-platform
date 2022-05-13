import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Route, Switch } from 'react-router-dom'
import AddAgriProduct from './AddAgriProduct'
import AgriProductsList from './AgriProductsList'
import EditAgriProduct from './EditAgriProduct'
import OrdersList from './OrdersList'
import UsersList from './UsersList'

export default function AdminScreen() {

    const userstate = useSelector((state) => state.loginUserReducer)
    const { currentUser } = userstate
    const dispatch = useDispatch()

    useEffect(() => {
        if (!currentUser.isAdmin) {
            window.location.href = '/'
        }
    }, [])

    return (
        <div>
            <div className='row justify-content-center'>
                <div className='col-md-10'>
                    <h2 style={{ fontSize: "35px" }}>Admin Panel</h2>
                    <ul className='adminfunctions'>
                        <li><Link to={"/admin/userslist"}>User List</Link></li>
                        <li><Link to={"/admin/agriproductslist"}>Agri Product List</Link></li>
                        <li><Link to={"/admin/addagriproduct"}>Add New Agri Product</Link></li>
                        <li><Link to={"/admin/orderslist"}>Orders List</Link></li>
                    </ul>

                    <Switch>
                    <Route path="/admin" component={UsersList} exact></Route>
                        <Route path="/admin/userslist" component={UsersList} exact></Route>
                        <Route path="/admin/agriproductslist" component={AgriProductsList} exact></Route>
                        <Route path="/admin/addagriproduct" component={AddAgriProduct} exact ></Route>
                        <Route path="/admin/orderslist" component={OrdersList} exact></Route>
                        <Route path="/admin/editagriproduct/:agriproductid" component={EditAgriProduct} exact></Route>
                    </Switch>
                </div>
            </div>
        </div>
    )
}
