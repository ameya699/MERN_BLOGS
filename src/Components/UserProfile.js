import React, { useState, useTransition } from 'react'
import { Link } from 'react-router-dom'
import Avatar from "../assets/avatar17.jpg"
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

const UserProfile = () => {
  const [avatar,setAvatar]=useState(Avatar);
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [currentPassword,setCurrentPassword]=useState('');
  const [newPassword,setNewPassword]=useState('');
  const [confirmNewPassword,setConfirmNewPassword]=useState('');
  return (
    <section className='profile'>
     <div className="container profile__container">
      <Link to={`/myposts/sfrd`} className='btn'>My Posts</Link>
      <div className="profile__details">
        <div className='avatar__wrapper'>
        <div className="profile__avatar">
          <img src={avatar} alt='my avatar'/>
        </div>
        <form className='avatar__form'>
          <input type='file' name='avatar' onChange={e=>setAvatar(e.target.files[0])} accept='png, jpg, jpeg'/>
          <label htmlFor='avatar'><FaEdit /></label>
        </form>
        <button className="profile__avatar-btn"><FaCheck /></button>
        </div>
        <h1>Ameya Awatade</h1>
        <form className="form profile__form">
          <p className="form__error-message">
            This is an error message
          </p>
          <input type='text' placeholder='Full Name' name='name' value={name} onChange={e=>setName(e.target.value)}/>
          <input type='email' placeholder='Email' name='email' value={email} onChange={e=>setEmail(e.target.value)}/>
          <input type='password' placeholder='Current Password' name='password' value={currentPassword} onChange={e=>setCurrentPassword(e.target.value)}/>
          <input type='password' placeholder='New Password' name='newpassword' value={newPassword} onChange={e=>setNewPassword(e.target.value)}/>
          <input type='password' placeholder='Confirm Password' name='confirmnewpassword' value={confirmNewPassword} onChange={e=>setConfirmNewPassword(e.target.value)}/>
          <button type='submit' className='btn primary'>Update Details</button>
        </form>
      </div>
     </div>
    </section>
  )
}

export default UserProfile