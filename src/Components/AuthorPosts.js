import React, { useEffect, useState } from 'react'
import PostItem from "./PostItem"
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loader from './Loader';

const AuthorPosts = () => {

  const [posts,setPosts]=useState([]);
  const [loading,setLoading]=useState(false);
  const {id}=useParams();

  useEffect(()=>{
    const fetchPosts=async()=>{
      setLoading(true);
    try
    { 
      const response =await axios.get(`${process.env.REACT_APP_BASE_URL}/posts/users/${id}`);
    const authorposts=await response?.data;
    setPosts(authorposts);
    console.log(response.data);
  }
  catch(err){
    console.log(err);
  }
  setLoading(false);

    }
    fetchPosts();
  },[])

  if(loading){
    return <Loader/>
  }

  return (
    <section className='posts'>
        {posts.length>0 ? <div className='container posts__container'>
        {
            posts.map(({_id,thumbnail,category,title,desc,creator,createdAt})=><PostItem key={_id} postID={_id} thumbnail={thumbnail} category={category} title={title} desc={desc} authorID={creator} createdAt={createdAt}/>)
        }
        </div>
      :<h2 className='center'>No Posts Found</h2>}
    </section>
  )
}

export default AuthorPosts