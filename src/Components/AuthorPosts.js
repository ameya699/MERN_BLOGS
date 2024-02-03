import React, { useEffect, useState } from 'react'
import {DUMMY_POSTS} from "../data"
import PostItem from "./PostItem"
import { useParams } from 'react-router-dom';
import axios from 'axios';

const AuthorPosts = () => {


  const [posts,setPosts]=useState([]);
  const [loading,setLoading]=useState(false);
  const {id}=useParams();

  useEffect(()=>{
    const fetchPosts=async()=>{
      setLoading(true);
    try
    { const response =await axios.get(`${process.env.REACT_APP_BASE_URL}/posts/users/${id}`);
    const authorposts=await response?.data;
    setPosts(authorposts);
  }
  catch(err){
    console.log(err);
  }
  setLoading(false);

    }
    fetchPosts();
  },[])
  return (
    <section className='posts'>
        {posts.length>0 ? <div className='container posts__container'>
        {
            posts.map(({id,thumbnail,category,title,desc,authorID})=><PostItem key={id} postID={id} thumbnail={thumbnail} category={category} title={title} desc={desc} authorID={authorID}/>)
        }
        </div>
      :<h2 className='center'>No Posts Found</h2>}
    </section>
  )
}

export default AuthorPosts