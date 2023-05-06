import React from 'react';
import './index.css';
import logo from '../../assets/logo.svg';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'

const  Navbar = () => {
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links-logo'>
          <img src={logo} alt='logo'/>
        </div>
        <div className='gpt3__navbar-links_container'>
          <p><a href='#home'>Home</a></p>
          <p><a href='#whatGPT'>What is GPT?</a></p>
          <p><a href='#possibility'>Open Ai</a></p>
          <p><a href='#caseStudy'>Case Studies</a></p>
          <p><a href='#library'>Libraries</a></p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;