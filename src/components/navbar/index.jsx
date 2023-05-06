import React, {useState} from 'react';
import './index.css';
import logo from '../../assets/logo.svg';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'

const Menu = () => {
  return (
    <>
      <p><a href='#home'>Home</a></p>
      <p><a href='#whatGPT'>What is GPT?</a></p>
      <p><a href='#possibility'>Open Ai</a></p>
      <p><a href='#caseStudy'>Case Studies</a></p>
      <p><a href='#library'>Libraries</a></p>
    </>
  );
}

const Sign = () => {
  return (
    <>
      <p>Sign in</p>
      <button type='button'>Sign up</button>
    </>
  );
}

const  Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt='logo'/>
        </div>
        <div className='gpt3__navbar-links_container'>
          <Menu/>
        </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <Sign/>
      </div>
      <div className='gpt3__navbar-menu'>
        {toggleMenu ?
          <RiCloseLine color='#fff' size={27} onClick={()=>setToggleMenu(false)}/> 
        : 
          <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)}/>
        }
        {toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className='gpt3__navbar-menu_container-links'>
              <Menu/>
            </div> 
            <div className='gpt3__navbar-menu_container-links-sign'>
              <Sign/>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;