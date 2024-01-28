import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

  const [userData,setUserData]=useState({
    email:"",
    password:""
  })

  const ChangeInputHandler=(e)=>{
    setUserData(prevData=>{
      return {...prevData,[e.target.name]:e.target.value}
    })
  }
  return (
    <section className='login'>
      <div className='container'>
        <h2>Log in</h2>
        <form className='form register__form'>
          <p className='form__error-message'>This is a error message</p>
          <input placeholder='Email' type='text' name='email' value={userData.email} onChange={ChangeInputHandler} autoFocus/>
          <input placeholder='password' type='password' name='password' value={userData.password} onChange={ChangeInputHandler} />
          <button className='btn primary'>Login</button>
        </form>
        <small>Dont have an account? <Link to="/register">Sign Up</Link></small>
      </div>
    </section>
  )
}

export default Login