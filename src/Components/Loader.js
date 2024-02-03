import React from 'react'
import LoadingGif from "../assets/loader.gif"
const Loader = () => {
  return (
    <div className='loader'>
        <div className='loader-_image'>
            <img src={LoadingGif} alt='loading'/>
        </div>
    </div>
  )
}

export default Loader