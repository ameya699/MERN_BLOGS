import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
const Register = () => {

  const [userData,setUserData]=useState({
    name:"",
    email:"",
    password:"",
    password2:""
  })
  const [error,setError]=useState('');
  const navigate=useNavigate();
  const ChangeInputHandler=(e)=>{
    setUserData(prevData=>{
      return {...prevData,[e.target.name]:e.target.value}
    })
  }

  const registerUser=async(e)=>{
    e.preventDefault();
    setError('');
      try{const response=await axios.post(`${process.env.REACT_APP_BASE_URL}/users/register`,userData);
      const newUser=await response.data;
      if(newUser.length<0){
        setError("Couldn't register user. Please try again");
      }
      else{navigate('/');}}
      catch(err){
        setError(err.response.data.message);
      }
  }


  return (
    <section className='register'>
      <div className='container'>
        <h2>Sign up</h2>
        <form className='form register__form' onSubmit={registerUser}>
{   error &&       <p className='form__error-message'>{error}</p>}          <input placeholder='Full Name' type='text' name='name' value={userData.name} onChange={ChangeInputHandler} autoFocus/>
          <input placeholder='Email' type='text' name='email' value={userData.email} onChange={ChangeInputHandler} />
          <input placeholder='password' type='password' name='password' value={userData.password} onChange={ChangeInputHandler} />
          <input placeholder='Confirm Password' type='password' name='password2' value={userData.password2} onChange={ChangeInputHandler} />
          <button className='btn primary'>Register</button>
        </form>
        <small>Already have an account? <Link to="/login">Sign In</Link></small>
      </div>
    </section>
  )
}

export default Register