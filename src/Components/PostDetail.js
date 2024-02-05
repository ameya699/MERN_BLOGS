import React, { useEffect, useState } from 'react'
import PostAuthor from './PostAuthor'
import { Link, useParams } from 'react-router-dom'
import Thumbnail from "../assets/blog22.jpg"
import { useContext } from 'react'  
import Loader from "./Loader";
import DeletePost from "./DeletePost";
import { UserContext } from '../context/userContext'
import axios from 'axios'

const PostDetail = () => {

  const {id}=useParams();
  const [post,setPost]=useState(null);
  const [error,setError]=useState(null);
  const [isLoading,setIsLoading]=useState(false);

  const {currentUser}=useContext(UserContext);

  useEffect(()=>{
    const getpost=async()=>{
      setIsLoading(true);
      try{
        const response=await axios.get(`${process.env.REACT_APP_BASE_URL}/posts/${id}`);
        setPost(response.data);
  
      }
      catch(err){
        console.log(err);
      }
      setIsLoading(false);
    }
    getpost();
  },[])

  if(isLoading){
    return <Loader/>
  }
  return (
    <section className='post-detail'>
      {error && <p className='error'> {error}</p>}
      {post && <div className='container post-detail__container'>
      <div className='post-detail__header'>
        <PostAuthor authorID={post?.creator} createdAt={post.createdAt}/>
        {currentUser?.id == post?.creator && <div className='post-detail__buttons'>
          <Link to={`/posts/werver/edit`} className='btn sm primary'>Edit</Link>
          <DeletePost to={`/posts/werver/delete`} postId={id}>Delete</DeletePost>
        </div>}
        </div>
        <h1>{post.title}</h1>
        <div className='post-detail__thumbnail'>
          <img src={`${process.env.REACT_APP_BASE_URL}/posts/thumbnail/${post.thumbnail}`} alt={`${process.env.REACT_APP_BASE_URL}/posts/thumbnail/${post.thumbnail}`}/>
        </div>
        <p dangerouslySetInnerHTML={{__html:post.description}}></p>
        </div>}
    </section>
  )
}

export default PostDetail;