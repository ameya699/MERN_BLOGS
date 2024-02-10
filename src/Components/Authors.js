import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Loader from "./Loader";
import axios from "axios";
import userlogo from "../assets/userlogo.png"


const Authors = () => {

  const [authors,setAuthors]=useState([]);
  const [loading,setIsLoading]=useState(false);
  useEffect(()=>{
    setIsLoading(true);
    const getAllAuthors=async()=>{
      const response=await axios.get(`${process.env.REACT_APP_BASE_URL}/users`);
      setAuthors(response.data);
      console.log(response.data)
      setIsLoading(false);
    }
   
    getAllAuthors();
  },[])

  if(loading){
    return <Loader/>
  }
  return (
    <section className='authors'>
      {authors.length>0?
      <div className='container authors__container'>
        {
          authors.map(({_id,avatar,name,posts})=>{
            return <Link key={_id} to={`/posts/users/${_id}`} className='author'>
              <div className='author__avatar'>
                {avatar!=null?<img src={`${process.env.REACT_APP_BASE_URL}/posts/thumbnail/${avatar}`} alt={authors?.avatar}/>
:<img src={userlogo} alt='userlogo'/>}
              </div>
              <div className='author__info'>
                <h2>{name}</h2>
                <p>{posts}</p>
              </div>
            </Link>
          })
        }
      </div>
      :<h2 className='center'>No Authors Found</h2>}
    </section>
  )
}

export default Authors