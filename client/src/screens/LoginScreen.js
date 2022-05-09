import React, { useState, useEffect } from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { loginUser } from '../actions/userActions'
import Loading from './Loading'
import { loginUserReducer } from '../reducers/userReducers'

export default function LoginScreen() {

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const loginstate = useSelector(state=>loginUserReducer)
    const {loading , error} = loginstate
 

    const dispatch = useDispatch()

    useEffect(() =>{
        if(localStorage.getItem('currentUser')){
            window.location.href='/'
        }
    }, [])

    function login(){
    
            const user = {
                email ,
                password
            }
            dispatch(loginUser(user))
        }

    return (
        <div>
            <div className='row justify-content-center mt-5'>
                <div className='col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded'>
                    <h2 className='text-center m-2' style={{ fontSize: '35px' }}>Login</h2>
                    {loading && (<Loading/>)}
                    {error ? (<div class="alert alert-danger alert-dismissible fade show" role="alert">
                        <strong>Invalid Credentials ! </strong>
                        </div>):''}
                    <div>
                        <input 
                            type='email' 
                            placeholder='Email' 
                            className='form-control'
                            value={email}
                            onChange={(e)=> {setemail(e.target.value)}} 
                            required
                        />
                        <input 
                            type='password' 
                            placeholder='Password' 
                            className='form-control'
                            value={password}
                            onChange={(e)=> {setpassword(e.target.value)}} 
                            required
                        />
                        <button onClick={login} className='btn mt-3 mb-3' >LOGIN</button><br/>
                        <a style={{color:'black'}} className="m-2" href='/register'>Click Here To Register</a>
                    </div>
                </div>

            </div>
        </div>
    )
}
