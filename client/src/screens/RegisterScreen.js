import React, { useState, useEffect } from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { registerUser } from '../actions/userActions'

export default function RegisterScreen() {

    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [phone, setphone] = useState('')
    const [password, setpassword] = useState('')
    const [cpassword, setcpassword] = useState('')
    const registerstate = useState(state=> state.registerUserReducer)
    const {error , loading , success} = registerstate

    const dispatch = useDispatch()

    function register(){
        if(cpassword!=password){
            alert("Password not matched")
        }else {
            const user = {
                name , 
                email ,
                phone ,
                password
            }
            console.log(user);
            dispatch(registerUser(user))
        }
    }

    return (
        <div>
            <div className='row justify-content-center mt-5'>
                <div className='col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded'>

                    {loading}
                    <h2 className='text-center m-2' style={{ fontSize: '35px' }}>Register</h2>
                    <div>
                        <input 
                            type='text' 
                            placeholder='Name' 
                            className='form-control' 
                            value={name}
                            onChange={(e)=> {setname(e.target.value)}}
                            required
                        />
                        <input 
                            type='email' 
                            placeholder='Email' 
                            className='form-control'
                            value={email}
                            onChange={(e)=> {setemail(e.target.value)}} 
                            required
                        />
                        <input 
                            type='phone' 
                            placeholder='Phone Number' 
                            className='form-control'
                            value={phone}
                            onChange={(e)=> {setphone(e.target.value)}} 
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
                        <input 
                            type='password' 
                            placeholder='Confirm Password' 
                            className='form-control' 
                            value={cpassword}
                            onChange={(e)=> {setcpassword(e.target.value)}}
                            required 
                        />
                        <button onClick={register} className='btn mt-3 mb-3' >REGISTER</button><br/>
                        <a style={{color:'black'}} className="m-2" href='/login'>Click Here To Login</a>
                    </div>
                </div>

            </div>
        </div>
    )
}
