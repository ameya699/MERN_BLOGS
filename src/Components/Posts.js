import React, { useEffect, useState } from 'react'
import PostItem from "./PostItem"
import axios from "axios";
import {DUMMY_POSTS} from "../data"
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';



const Posts = () => {

  const [posts,setPosts]=useState([]);
  const [loading,setLoading]=useState(false); 
  useEffect(()=>{
    const fetchPosts=async()=>{
      setLoading(true);
      try{
        const response=await axios.get(`${process.env.REACT_APP_BASE_URL}/posts`);
        const data=await response.data;
        console.log(data);
        setPosts(data);
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
            posts.map(({_id:id,thumbnail,category,title,description,creator,createdAt})=>
            <PostItem key={id} postID={id} thumbnail={thumbnail} category={category} title={title} description={description} authorID={creator} createdAt={createdAt}/>
            )
        }
        </div>
      :<h2 className='center'>No Posts Found</h2>}
    </section>
  )
}

export default Posts