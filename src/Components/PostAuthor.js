import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import userlogo from "../assets/userlogo.png"
import axios from "axios";

const PostAuthor = ({authorID,createdAt,thumbnail}) => {
  const [author,setAuthor]=useState({});
useEffect(()=>{
  const getAuthor=async()=>{
    try{
      const response=await axios.get(`${process.env.REACT_APP_BASE_URL}/users/${authorID}`);
      setAuthor(response?.data);
    }
    catch(err){
      console.log(err);
    }
  }
  
  getAuthor();
},[])
 

  return (
   <Link to={`/posts/users/${authorID}`} className='post__author'>
    <div className='post__author-avatar'>
      
    {author?.avatar ?   <img src={`${process.env.REACT_APP_BASE_URL}/posts/thumbnail/${author?.avatar}`} alt={`${process.env.REACT_APP_BASE_URL}/posts/thumbnail/${author?.avatar}`}/>
    :
    <img src={userlogo} alt='userlogo'/>}
    </div>
    <div className='post__author-details'>
        <h5>By : {author?.name}</h5>
        <small>{createdAt}</small>
    </div>
   </Link>
   
  )
}

export default PostAuthor