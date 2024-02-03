import React, { useState,useContext, useEffect } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import axios from "axios";
import  {UserContext} from "../context/userContext.js";

const Login = () => {

  const [userData,setUserData]=useState({
    email:"",
    password:""
  })
  const [error,setError]=useState('');
  const navigate=useNavigate();
  
  const {currentUser,setCurrentUser}=useContext(UserContext);
  const token=currentUser?.token;
  console.log(token)
  useEffect(()=>{
    if(token){ 
      console.log("not logged in");
      navigate('/');
    }
  
  },[])
  
  const ChangeInputHandler=(e)=>{
    setUserData(prevData=>{
      return {...prevData,[e.target.name]:e.target.value}
    })
  }
  const loginUser=async(e)=>{
    e.preventDefault();
    setError('');
    try{
      const response=await axios.post(`${process.env.REACT_APP_BASE_URL}/users/login`,userData);
      const user=await response.data;
      setCurrentUser(user);
      navigate('/');
    }
    catch(err){
     console.log(err);
    }
  }
  return (
    <section className='login'>
      <div className='container'>
        <h2>Log in</h2>
        <form className='form register__form' onSubmit={loginUser}>
{ error && <p className='form__error-message'>{error}</p>
}          <input placeholder='Email' type='text' name='email' value={userData.email} onChange={ChangeInputHandler} autoComplete='username' autoFocus/>
          <input placeholder='password' type='password' name='password' value={userData.password} onChange={ChangeInputHandler} autoComplete='curent-password'/>
          <button className='btn primary'>Login</button>
        </form>
        <small>Dont have an account? <Link to="/register">Sign Up</Link></small>
      </div>
    </section>
  )
}

export default Login