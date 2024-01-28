import React, { useState } from 'react'
import PostItem from "./PostItem"

import {DUMMY_POSTS} from "../data"



const Posts = () => {

   const [posts,setPosts]=useState(DUMMY_POSTS); 
  return (
    <section className='posts'>
        <div className='container posts__container'>
        {
            posts.map(({id,thumbnail,category,title,desc,authorID})=><PostItem key={id} postID={id} thumbnail={thumbnail} category={category} title={title} desc={desc} authorID={authorID}/>)
        }
        </div>
    </section>
  )
}

export default Posts