import React, { useContext, useEffect, useState } from 'react'
import DeletePost from './DeletePost';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { UserContext} from "../context/userContext";
import axios from 'axios';
const Dashboard = () => {
  const [posts,setPosts]=useState([]);
  const {currentUser}=useContext(UserContext);
  const token=currentUser?.token;
  const navigate=useNavigate();
  const {id}=useParams();
  const getAllPosts=async()=>{
    try{
      const response=await axios.get(`${process.env.REACT_APP_BASE_URL}/posts/users/${id}`);
    setPosts(response.data);
    console.log(posts);
    }
    catch(err){
      console.log(err);
    }
  }
  useEffect(()=>{
    if(!token){
     navigate('/login');
    }
    getAllPosts();
  },[])
  return (
    <section className='dashboard'>
      {
       posts.length>0 ?
       <div className='container dashboard__container'>
         {
           posts.map(post=>{
             return <article key={post.id} className='dashboard__post'>
               
               <div className="dashboard__post-info">
                 <div className="dashboard__post-thumbnail">
                   <img src={`${process.env.REACT_APP_BASE_URL}/posts/thumbnail/${post?.thumbnail}`} alt='thumbnail'/>
                 </div>
                 <h5>{post.title}</h5>
               </div>
               
               <div className="dashboard__post-actions">
                 <Link to={`/posts/${post?._id}`} className='btn sm'>View</Link>
                 <Link to={`/posts/${post?._id}/edit`} className='btn sm primary'>Edit</Link>
                 <DeletePost postId={post?._id}>Delete</DeletePost>
                 {/* <Link to={`/posts/${post?._id}/delete`} className='btn sm danger'>Delete</Link> */}
               </div>
             </article>
           })
         }
       </div>:
       <h2 className='center'>You have no posts yet</h2>
      }
    </section>
  
  )
}

export default Dashboard