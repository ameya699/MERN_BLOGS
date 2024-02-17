import React, { useContext, useEffect, useState, useTransition } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Avatar from "../assets/avatar13.jpg"
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { UserContext } from '../context/userContext';
import axios from 'axios';
import userlogo from "../assets/userlogo.png"


const UserProfile = () => {
  const [avatar,setAvatar]=useState(Avatar);
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [currentPassword,setCurrentPassword]=useState('');
  const [newPassword,setNewPassword]=useState('');
  const [confirmNewPassword,setConfirmNewPassword]=useState('');
  const {currentUser}=useContext(UserContext);
  const [error,setError]=useState('');
  const token=currentUser?.token;
  const navigate=useNavigate();
  const {id}=useParams();
  const [userData,setUserData]=useState({});
  const getUserProfile=async()=>{
    try{
        const response=await axios.get(`${process.env.REACT_APP_BASE_URL}/users/${id}`);
        setName(response.data.name);
        setEmail(response.data.email);
        setAvatar(response.data.avatar);
    }
    catch(err){
      console.log(err);
    }
  }
  useEffect(()=>{
    if(!token){
     navigate('/login');
    }
    getUserProfile();

  },[])
  

  return (
    <section className='profile'>
     <div className="container profile__container">
      <Link to={`/myposts/${id}`} className='btn'>My Posts</Link>
      <div className="profile__details">
        <div className='avatar__wrapper'>
        <div className="profile__avatar">
{ avatar ? <img src={`${process.env.REACT_APP_BASE_URL}/posts/thumbnail/${avatar}`} alt='my avatar'/>
:<img src={userlogo} alt='userlogo'/>}          
        </div>
        <form className='avatar__form'>
          <input type='file' name='avatar' onChange={e=>setAvatar(e.target.files[0])} accept='png, jpg, jpeg'/>
          <label htmlFor='avatar'><FaEdit /></label>
        </form>
        <button className="profile__avatar-btn"><FaCheck /></button>
        </div>
        <h1>{name}</h1>
        <form className="form profile__form">
          {error && <p className="form__error-message">
            {error}
          </p>}
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