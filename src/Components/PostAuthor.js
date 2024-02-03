import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Avatar from "../assets/avatar1.jpg"
import axios from "axios";

const PostAuthor = ({authorID,createdAt}) => {

 

  return (
   <Link to={`/posts/users/sdfsdf`} className='post__author'>
    <div className='post__author-avatar'>
        <img src={`${process.env.REACT_APP_ASSESTS_URL}`} alt=''/>
    </div>
    <div className='post__author-details'>
        <h5>By : Ameya Awatade</h5>
        <small>{createdAt}</small>
    </div>
   </Link>
   
  )
}

export default PostAuthor