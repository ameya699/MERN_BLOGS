import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from "./assets/logo.png"
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { UserContext } from './context/userContext';
const Header = () => {
  const [isNavShowing,setIsNavShowing]=useState(window.innerWidth>800?true:false);
  const {currentUser}=useContext(UserContext);
  const closeHandler=()=>{
    if(window.innerWidth<800){
      setIsNavShowing(false);
    }
    else{
      setIsNavShowing(true);
    }
  }
  return (
    <nav>
      <div className='container nav__container'>
    <Link to="/" className='nav__logo'>
    <img src={Logo} alt="Navbar Logo" onClick={closeHandler}/>
    </Link>
    {currentUser?.id && isNavShowing && <ul className='nav__menu'>
      <li><Link to="/profile/sfdgrf" onClick={closeHandler}>{currentUser?.name}</Link></li>
      <li><Link to="/create" onClick={closeHandler}>Create Post</Link></li>
      <li><Link to="/authors" onClick={closeHandler}>Authors</Link></li>
      <li><Link to="/logout" onClick={closeHandler}>Logout</Link></li>
    </ul>}
    {!currentUser?.id && isNavShowing && <ul className='nav__menu'>
      <li><Link to="/authors" onClick={closeHandler}>Authors</Link></li>
      <li><Link to="/login" onClick={closeHandler}>Login</Link></li>
    </ul>}
    <button className='nav__toggle-btn' onClick={()=>setIsNavShowing(!isNavShowing)}>
    {isNavShowing?<AiOutlineClose/>:<FaBars/>}
    </button>
      </div>
    </nav>
  )
}

export default Header