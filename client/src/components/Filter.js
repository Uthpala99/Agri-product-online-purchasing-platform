import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { filterAgriProducts } from '../actions/agriProductActions';

export default function Filter() {
  
  const dispatch = useDispatch()
  const [searchkey , setsearchkey] = useState('')
  const [category , setcategory] = useState('all')


    return (
    <div className='container'>
        <div className='row justify-content-center shadow-lg p-3 mb-5 bg-white rounded'>
            <div className='col-md-3 w-100'>
                <input 
                    value={ searchkey} 
                    onChange={(e)=>setsearchkey(e.target.value)}
                    type="text" 
                    className='form-control' 
                    placeholder='Search Agri Products'
                    />
            </div>
            <div className='col-md-3 w-100'>
                <select name="" id="" className='form-control w-100 mt-2' value={category} onChange={(e)=>setcategory(e.target.value)}>
                    <option value="all">All</option>
                    <option value="dairy machinery">DAIRY MACHINERY</option>
                    <option value="light machinery">LIGHT MACHINERY</option>
                </select>
            </div>
            <div className='col-md-3 w-100'>
                <button className='btn w-100 mt-2' onClick={()=>{dispatch(filterAgriProducts(searchkey , category))}}>FILTER</button>
            </div>
        </div>
    </div>
  )
}
