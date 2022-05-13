import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editAgriProduct, getAgriProductById } from '../actions/agriProductActions'
import Loading from './Loading'

export default function EditAgriProduct({ match }) {

    const dispatch = useDispatch();
    const [name, setname] = useState('');
    const [prices, setprices] = useState();
    const [category, setcategory] = useState('');
    const [image, setimage] = useState('');
    const [description, setdescription] = useState('');

    const getagriproductbyidstate = useSelector(state => state.getAgriProductByIdReducer)
    const { agriProduct, error, loading } = getagriproductbyidstate
    
    const editagriproductstate = useSelector(state => state.editAgriProductReducer)
    const { editsuccess , editerror, editloading } = editagriproductstate

    useEffect(() => {
        if(agriProduct){
            if(agriProduct._id == match.params.agriproductid){
                setname(agriProduct.name)
                setprices(agriProduct.prices)
                setcategory(agriProduct.category)
                setimage(agriProduct.image)
                setdescription(agriProduct.description)
            }
            else{
                dispatch(getAgriProductById(match.params.agriproductid));
            }
            
        }else{
            dispatch(getAgriProductById(match.params.agriproductid));
        }
        
    }, [agriProduct , dispatch])


    function formHandler(e) {
        e.preventDefault();

        const editedagriProduct = {
            _id :match.params.agriproductid,
            name,
            prices,
            category,
            image,
            description
        }
        dispatch(editAgriProduct(editedagriProduct))
    }

    return (
        <div>
            <h1>Edit AgriProduct</h1>
            <h1>AgriProduct Id = {match.params.agriproductid}</h1>
            <div className='text-left'>


                 {loading && (<Loading />)}{/*
                {/* {success ? (<div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>New Agri Product added Successfully </strong>
                </div>) : ''} 
                {error ? (<div class="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>Something went wrong  </strong>
                </div>) : ''} */}
                {editloading && (<Loading />)}
                {editsuccess ? (<div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Agri Product details edited Successfully </strong>
                </div>) : ''}
                <form onSubmit={formHandler}>
                    <input type="text"
                        placeholder='Product Name'
                        value={name}
                        className='form-control'
                        onChange={(e) => { setname(e.target.value) }}
                        required
                    />
                    <input type="text"
                        placeholder='Product Price'
                        value={prices}
                        className='form-control'
                        onChange={(e) => { setprices(e.target.value) }}
                        required
                    />
                    <input type="text"
                        placeholder='Product Category'
                        value={category}
                        className='form-control'
                        onChange={(e) => { setcategory(e.target.value) }}
                        required
                    />
                    <input type="text"
                        placeholder='Product Description'
                        value={description}
                        className='form-control'
                        onChange={(e) => { setdescription(e.target.value) }}
                        required
                    />
                    <input type="text"
                        placeholder='Product Image URL'
                        value={image}
                        className='form-control'
                        onChange={(e) => { setimage(e.target.value) }}
                        required
                    />
                    <button className='btn mt-3 mb-3' type='submit'>EDIT AGRI PRODUCT</button><br />
                </form>
            </div>
        </div>
    )
}
