import React, { useState } from 'react'
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css'
const CreatePost = () => {
  const [title,setTitle]=useState('');
  const [category,setCategory]=useState('Uncategorized');
  const [description,setDescription]=useState('');
  const [thumbnail,setThumbnail]=useState('');
  const POST_CATEGORIES=["Agriculture","Business","Education","Entertainment","Art","Investment","uncategorized","Weather"]
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
  return (
    <section className="create-post">
      <div className="container">
        <h2>Create Post</h2>
        <p className="form__error-message">This is an error Message</p>
      <form className="form create-post__form">
        <input type='text' placeholder='Title' value={title} onChange={(e=>setTitle(e.target.value))}/>
        <select name='category' value={category} onChange={(e)=>setCategory(e.target.value)}>
          {
            POST_CATEGORIES.map((cat=><option key={cat}>{cat}</option>))
          }
         </select>
         <ReactQuill modules={module}  formats={formats} value={description} onChange={(e)=>setDescription(e.target.value)}/>
         <input type="file" onChange={(e)=>setThumbnail(e.target.files[0])} accept='png, jpeg,jpg'/>
          <button type='btn primary' typeof='submit'>Create</button>
       </form>
      </div>
    </section>
  )
}

export default CreatePost