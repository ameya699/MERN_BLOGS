import React, { useContext, useEffect, useState } from 'react'
import 'react-quill/dist/quill.snow.css';
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css'
import {useNavigate} from "react-router-dom";
import {UserContext} from "../context/userContext"
import axios from "axios";
const CreatePost = () => {
  const [title,setTitle]=useState('');
  const [category,setCategory]=useState('Uncategorized');
  const [description,setDescription]=useState('');
  const [thumbnail,setThumbnail]=useState('');
  const POST_CATEGORIES=["Agriculture","Business","Education","Entertainment","Art","Investment","uncategorized","Weather"]
  const {currentUser}=useContext(UserContext);
  const token=currentUser?.token;
  const navigate=useNavigate();
  useEffect(()=>{
    if(!token){
     navigate('/login');
    }
  },[])

  const formats=[
    'header',
    'bold','italic','underline','strike','blockquote',
    'list','bullet','indent','link','image'
  ]
  const module={
    toolbar:[
      [{'header':[1,2,false]}],
      ['bold','italic','underline','strike','blockquote'],
      [{'list':'ordered'},{'list':'bullet'},{'indent':'-1'},{'indent':'+1'}],
      ['link','image']
      ['clean']
    ]
  }
  const [error,setError]=useState('');
  const createPost=async(e)=>{
    e.preventDefault();
    const postData=new FormData();
    postData.set('title',title);
    postData.set('category',category);
    postData.set('description',description);
    postData.set('thumbnail',thumbnail);

    try{
      const response=await axios.post(`${process.env.REACT_APP_BASE_URL}/posts`,postData,{withCredentials:true,headers:{Authorization:`Bearer ${token}`}})
      if(response.status==201){
        return navigate('/');
      }
    }
    catch(err){
      setError(err.response.data.message);
    }
  }
  return (
    <section className="create-post">
      <div className="container">
        <h2>Create Post</h2>
{error &&        <p className="form__error-message">{error}</p>
}      <form className="form create-post__form" onSubmit={createPost}>
        <input type='text' placeholder='Title' value={title} onChange={(e=>setTitle(e.target.value))}/>
        <select name='category' value={category} onChange={(e)=>setCategory(e.target.value)}>
          {
            POST_CATEGORIES.map((cat=><option key={cat}>{cat}</option>))
          }
         </select>
         <ReactQuill  modules={module} placeholder='Enter text' formats={formats} value={description} onChange={(value)=>setDescription(value)}/>
         <input type="file" onChange={(e)=>setThumbnail(e.target.files[0])} accept='png, jpeg,jpg'/>
          <button type='btn primary' typeof='submit'>Create</button>
       </form>
      </div>
    </section>
  )
}

export default CreatePost