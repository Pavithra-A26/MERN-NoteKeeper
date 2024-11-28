import React, { useState } from 'react'
import { loginUser } from '../Services/Api';
import { useNavigate } from 'react-router-dom';
import '../Styles/register.css'

export const LoginPage = () => {
  const[formdata,setdata] = useState({
    email:"",password:""
  })
  const Navigate = useNavigate();

  const handlesubmit = async(e) =>{
    e.preventDefault();
    try{
      const {data} = await loginUser(formdata);
      localStorage.setItem('token',data.token)
      alert("Login succesfull")
      Navigate('/note')
    }
    catch(err){
      console.log(err)
      alert(err)
    }
  }
  return (
    <div className='reg'>
      <h2>Login Page</h2>
      <div className='reg-container'>
        <form onSubmit={handlesubmit}>
          <input
            type='email'
            placeholder='Email'
            value={formdata.email}
            onChange={(e) => setdata({...formdata,email:e.target.value})}
          />
          <input
           type='password'
           placeholder='Password'
           value={formdata.password}
           onChange={(e) => setdata({...formdata,password: e.target.value})}
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}
