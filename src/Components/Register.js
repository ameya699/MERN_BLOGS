import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {

  const [userData,setUserData]=useState({
    name:"",
    email:"",
    password:"",
    password2:""
  })

  const ChangeInputHandler=(e)=>{
    setUserData(prevData=>{
      return {...prevData,[e.target.name]:e.target.value}
    })
  }
  return (
    <section className='register'>
      <div className='container'>
        <h2>Sign up</h2>
        <form className='form register__form'>
          <p className='form__error-message'>This is a error message</p>
          <input placeholder='Full Name' type='text' name='name' value={userData.name} onChange={ChangeInputHandler} autoFocus/>
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