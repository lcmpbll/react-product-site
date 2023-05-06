import React from 'react'
import './index.css'

const Article = ({imgUrl, imgAlt, date, title}) => {
  return (
    <div className='gpt3__blog-container_article'>
      <div className='gpt3__blog-container_article-image'>
        <img src={imgUrl} alt={imgAlt}/>
      </div>
      <div className='gpt3__blog-container_article-content'>
        <p>{date}</p>
        <h3>{title}</h3>
        <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article