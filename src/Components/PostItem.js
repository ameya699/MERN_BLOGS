import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import PostAuthor from './PostAuthor'

const PostItem = ({postID,thumbnail,description,title,authorID,category,createdAt}) => {
    const shortdescription=description?.length>145?description.substr(0,145)+'...':description;
    const shorttitle=title.length>30?title.substr(0,40)+'...':title
  return (
    <article className='post'>
        <div className='post__thumbnail'>
            <img src={`${process.env.REACT_APP_BASE_URL}/posts/thumbnail/${thumbnail}`} alt={thumbnail}/>
        </div>
        <div className='post__content'>
            <Link to={`/posts/${postID}`}>
                <h3>{shorttitle}</h3>
            </Link>
            <p>{shortdescription}</p>
            <div className='post__footer'>
                <PostAuthor authorID={authorID} createdAt={createdAt} thumbnail={thumbnail}/>
                <Link to={`/posts/categories/${category}`} className='btn category'>{category}</Link>
            </div>
        </div>
    </article>
  )
}

export default PostItem