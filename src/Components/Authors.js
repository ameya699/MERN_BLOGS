import React, { useState } from 'react'
import Avatar1 from  "../assets/avatar1.jpg";
import Avatar2 from  "../assets/avatar2.jpg";
import Avatar3 from  "../assets/avatar3.jpg";
import Avatar4 from  "../assets/avatar4.jpg";
import Avatar5 from  "../assets/avatar5.jpg";
import { Link } from 'react-router-dom';


const authorData=[
  {id:1,avatar:Avatar1,name:"Tony Stark",posts:4},
  {id:2,avatar:Avatar2,name:"Pepper Potts",posts:5},
  {id:3,avatar:Avatar3,name:"Bruce Banner",posts:0},
  {id:4,avatar:Avatar4,name:"Bucky",posts:6},
  {id:5,avatar:Avatar5,name:"Tom Cruise",posts:2},
]

const Authors = () => {
  const [authors,setAuthors]=useState(authorData);
  return (
    <section className='authors'>
      {authors.length>0?
      <div className='container authors__container'>
        {
          authors.map(({id,avatar,name,posts})=>{
            return <Link key={id} to={`/posts/users/${id}`} className='author'>
              <div className='author__avatar'>
                <img src={avatar} alt={name}/>
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