import React,{ useState } from 'react'
import '../Styles/register.css'
import { registerUser } from '../Services/Api'
import { useNavigate  , Link} from 'react-router-dom'

export const RegisterPage = () => {
    const[formdata , setdata] = useState({
        name:"",email:"",password:""
    })
    const Navigate = useNavigate();
    const handlesubmit = async(e) => {
        e.preventDefault();
        try{
            await registerUser(formdata);
            alert('Register successfull')
            Navigate('/login');
        }
        catch(err){
            console.log(err)
            alert( err);
        }
    }
    
  return (
   <>
     <div className='reg'>
    <h2>Register Page</h2>
    <div className='reg-container'>
    <form onSubmit={handlesubmit}>
        <input
            type='text'
            placeholder='Name'
            value={formdata.name}
            onChange={(e) => setdata({...formdata, name: e.target.value})}
        />
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
            onChange={(e) => setdata({...formdata,password:e.target.value})}
        />
        <button type='submit'>Submit</button>
    </form>
    <p className="login-prompt">
            Already registered? <Link to="/login">Log in here</Link>.
      </p>
    </div>
    </div>
   </>
  )
}
