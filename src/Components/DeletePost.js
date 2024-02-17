import React, { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../context/userContext';
import { useContext } from 'react';
import axios from 'axios';
const DeletePost = ({postId}) => {
  const {currentUser}=useContext(UserContext);
  const token=currentUser?.token;
  const navigate=useNavigate();
  const deleteUser=async()=>{
    try{
      const response=await axios.delete(`${process.env.REACT_APP_BASE_URL}/posts/${postId}`,{withCredentials:true,headers:{Authorization:`Bearer ${token}`}});
      if(response.data){
        navigate('/');
      }
      else{
        alert("error occured");
      }
    }
    catch(err){
      console.log(err);
    }
  }
  useEffect(()=>{
    if(!token){
     navigate('/login');
    }
  },[])


  return (
  
    <Link className='btn sm danger' onClick={deleteUser}>Delete</Link>
  )
}

export default DeletePost