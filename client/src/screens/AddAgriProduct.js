import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addAgriProduct } from '../actions/agriProductActions'
import Loading from './Loading'

export default function AddAgriProduct() {

    const [name, setname] = useState('')
    const [prices, setprices] = useState()
    const [category, setcategory] = useState('')
    const [image, setimage] = useState('')
    const [description, setdescription] = useState('')

    const dispatch = useDispatch()
    const addagriproductstate = useSelector(state=>state.addAgriProductReducer)
    const {success , error , loading } = addagriproductstate

    function formHandler(e){
        e.preventDefault();

        const agriProduct ={
            name ,
            prices ,
            category ,
            image , 
            description
        }

        console.log(agriProduct);
        dispatch(addAgriProduct(agriProduct));
    }

  


    return (
        <div className='text-left'>
            <h1>Add Agri Product</h1>

            {loading && (<Loading />)}
            {success ? (<div class="alert alert-success alert-dismissible fade show" role="alert">
                        <strong>New Agri Product added Successfully </strong>
                        </div>) :''} 
            {error ? (<div class="alert alert-danger alert-dismissible fade show" role="alert">
                        <strong>Something went wrong  </strong>
                        </div>):''}
            <form onSubmit={formHandler}>
                <input type="text"
                    placeholder='Product Name'
                    value={name}
                    className='form-control'
                    onChange={(e)=> {setname(e.target.value)}} 
                    required
                />
                <input type="text"
                    placeholder='Product Price'
                    value={prices}
                    className='form-control'
                    onChange={(e)=> {setprices(e.target.value)}} 
                    required
                />
                <input type="text"
                    placeholder='Product Category'
                    value={category}
                    className='form-control'
                    onChange={(e)=> {setcategory(e.target.value)}} 
                    required
                />
                <input type="text"
                    placeholder='Product Description'
                    value={description}
                    className='form-control'
                    onChange={(e)=> {setdescription(e.target.value)}} 
                    required
                />
                <input type="text"
                    placeholder='Product Image URL'
                    value={image}
                    className='form-control'
                    onChange={(e)=> {setimage(e.target.value)}} 
                    required
                />
                <button  className='btn mt-3 mb-3' type='submit'>ADD AGRI PRODUCT</button><br/>
            </form>
        </div>
    )
}
