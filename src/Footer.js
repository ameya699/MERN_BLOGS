import React from 'react'
import { Link } from 'react-router-dom'
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer>
      <ul className='footer__categories'>
        <li><Link to="posts/categories/Agriculture">Agriculture</Link></li>
        <li><Link to="posts/categories/Business">Business</Link></li>
        <li><Link to="posts/categories/Education">Education</Link></li>
        <li><Link to="posts/categories/Entertainment">Entertainment</Link></li>
        <li><Link to="posts/categories/Art">Art</Link></li>
        <li><Link to="posts/categories/Investment">Investment</Link></li>
        <li><Link to="posts/categories/Uncategorized">Uncategorized</Link></li>
        <li><Link to="posts/categories/Weather">Weather</Link></li>
        
      </ul>
      <div className='social-details'>
          <Link className='social-icon' to='https://www.linkedin.com/in/ameyaawatade/' target='__blank'><CiLinkedin /></Link>
          <Link className='social-icon' to='https://github.com/ameya699' target='__blank'><FiGithub /></Link>
          <Link className='social-icon' to='https://www.instagram.com/ameyaawatade/' target='__blank'><FaInstagram /></Link>
          <Link className='social-icon' to='https://twitter.com/AmeyaAwatade' target='__blank'><RiTwitterXLine /></Link>
      </div>
      <div className='footer__copyright'>
        <small>All Rights Reserved &copy; Copyright, Ameya Awatade.</small>
      </div>
    </footer>
  )
}

export default Footer