import React from 'react'
import gpt3logo from '../../assets/logo.svg';
import './index.css'

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Do you want to take a step into the future?</h1>
      </div>
      <div className='gpt3__footer-btn'>
        <p>Request Early Access</p>
      </div>
      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src={gpt3logo} alt='logo'/>
          <p>123 Main Street <br/>Suite 456<br/>Anytown, State 12345<br/>United States</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Company</h4>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div> 
        <div className='gpt3__footer-links_div'>
          <h4>Get In Touch</h4>
          <p>123 Main Street</p>
          <p>(888) 990- 0112</p>
          <p>info@ai.net</p>
        </div>
        
      </div>
      <div className='gpt3__footer-copyright'>
        <p>© Copyright 2030 Ai industries all rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer