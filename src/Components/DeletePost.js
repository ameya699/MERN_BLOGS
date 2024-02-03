import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/userContext';
import { useContext } from 'react';
const DeletePost = () => {
  const {currentUser}=useContext(UserContext);
  const token=currentUser?.token;
  const navigate=useNavigate();
  useEffect(()=>{
    if(!token){
     navigate('/login');
    }
  },[])
  return (
    <div>DeletePost</div>
  )
}

export default DeletePost