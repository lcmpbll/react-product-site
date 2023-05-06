import React from 'react'
import possibilityImage from '../../assets/possibility.png';
import './index.css'

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={possibilityImage} alt='possibility'/>
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Request Early Access to get Started</h4>
        <h1 className='gradient__text'>The possibilities are beyond our imagination</h1>
        <p>AI has the potential to automate tedious tasks, personalize experiences, make predictions, assist in healthcare, education, entertainment, robotics, communication, and security, among other applications. As AI continues to advance, new possibilities and use cases are likely to emerge.</p>
        <h4>Request Early Access to get Started</h4>
      </div>
    </div>
  )
}

export default Possibility