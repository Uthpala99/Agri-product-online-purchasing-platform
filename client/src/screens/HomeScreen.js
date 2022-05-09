import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAgriProducts } from '../actions/agriProductActions';
import AgriProduct from '../components/AgriProduct';
import Error from './Error';
import Loading from './Loading';


function HomeScreen() {

    const dispatch = useDispatch()

    const agriProductsstate = useSelector(state => state.getAllAgriProductsReducer)

    const { agriProducts, error, loading } = agriProductsstate

    useEffect(() => {
        dispatch(getAllAgriProducts())
    }, [])

    return (
        <div>
            <div className='row justify-content-center'>

                {loading ? (<Loading/>) : error ? (<Error error='Something went wrong'/>) : (
                    agriProducts.map(agriProduct => {
                        return <div className='col-md-3 m-3' key= {agriProducts._id}>
                            <div >
                                <AgriProduct agriProduct={agriProduct} />
                            </div>
                        </div>
                    })
                )}
            </div>
        </div>
    );
}

export default HomeScreen;