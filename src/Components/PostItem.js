import React from 'react'
import Posts from "../Components/Posts"
import {Link} from "react-router-dom"
import PostAuthor from './PostAuthor'
const PostItem = ({postID,thumbnail,desc,id,title,authorID,category}) => {
    const shortdesc=desc.length>145?desc.substr(0,145)+'...':desc;
    const shorttitle=title.length>30?title.substr(0,40)+'...':title
  return (
    <article className='post'>
        <div className='post__thumbnail'>
            <img src={thumbnail} alt={title}/>
        </div>
        <div className='post__content'>
            <Link to={`/posts/${postID}`}>
                <h3>{shorttitle}</h3>
            </Link>
            <p>{shortdesc}</p>
            <div className='post__footer'>
                <PostAuthor/>
                <Link to={`/posts/categories/${category}`} className='btn category'>{category}</Link>
            </div>
        </div>
    </article>
  )
}

export default PostItem