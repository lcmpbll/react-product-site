import React from 'react'
import './index.css'
import people from '../../assets/people.png';
import AI from '../../assets/ai.png';

const Header= () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Let&apos;s Build Something amazing with GPT-3 OpenAI</h1>
        <p>As an AI language model, GPT is able to assist with a variety of tasks, such as answering questions, providing information, generating text, assisting with language translation, helping with creative writing, and engaging in natural language conversations.</p>
        <div className='gpt3__header-content__input'>
          <input type='email' placeholder='Your email address'/>
          <button type='button'>Get Started</button>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={people} alt='people'/>
          <p>1,600 people requested access to AI in the past 24 hours.</p>
        </div>
      </div>
      <div className='gpt3__header-image'>
        <img src={AI} alt='AI'/>
      </div>
    </div>
  )
}

export default Header