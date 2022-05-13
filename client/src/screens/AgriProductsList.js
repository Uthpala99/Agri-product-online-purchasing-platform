import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAllAgriProducts } from '../actions/agriProductActions'
import Loading from './Loading'

export default function AgriProductsList() {

    const dispatch = useDispatch()

    const agriProductsstate = useSelector(state => state.getAllAgriProductsReducer)

    const { agriProducts, error, loading } = agriProductsstate

    useEffect(() => {
        dispatch(getAllAgriProducts())
    }, [])


  return (
    <div>
        <h2 style={{ fontSize: "35px" }}>Agri Products List</h2>
        {loading && (<Loading/>)}
                    {error ? (<div class="alert alert-danger alert-dismissible fade show" role="alert">
                        <strong>Something Went wrong ! </strong>
                        </div>):''}
        <table className='table tavle-bordered'>
            <thead className='thead-dark'>
                <tr>
                    <th>Name</th>
                    <th>Prices</th>
                    <th>Category</th>
                    <th>Actions</th>
                </tr>
            </thead>
            {agriProducts && agriProducts.map(agriProducts=>{
                return <tr>
                    <td>{agriProducts.name}</td>
                    <td>{agriProducts.prices}</td>
                    <td>{agriProducts.category}</td>
                    <td>
                        <i className='fa fa-trash m-2'></i>
                        <Link to={`/admin/editagriproduct/${agriProducts._id}`}><i className='fa fa-edit m-2'></i></Link>
                    </td>
                </tr>
            })}
        </table>
        
    </div>
  )
}
