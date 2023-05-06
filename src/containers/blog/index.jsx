import React from 'react';
import Article from '../../components/article';
import './index.css';
import {blog01, blog02, blog03, blog04, blog05} from './imports';

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A lot is happening. We are blogging about it!</h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>
          <Article imgUrl={blog01} date="September 01, 3030" title='AI technology used to improve weather forecasting accuracy' imgAlt="Meteorological data being analyzed by AI to improve weather forecasts"/>
        </div>
        <div className='gpt3__blog-container_groupB'>
          <Article imgUrl={blog02} date="September 01, 1999" title='AI-powered robots to revolutionize warehouse industry' imgAlt='AI-powered robots working in a warehouse'/>
          <Article imgUrl={blog03} date="September 01, 2099" title="New AI system can detect early signs of Alzheimer's disease" imgAlt="Brain scan showing early signs of Alzheimer's detected by AI"/>
          <Article imgUrl={blog04} date="September 01, 1899" title='Google AI tool can design computer chips faster than humans' imgAlt="Computer chip design process being optimized by Google's AI tool"/>
          <Article imgUrl={blog05} date="September 01, 1909" title='Experts predict AI will transform healthcare and education by the year 2000' imgAlt="Doctors consulting with an AI-powered healthcare system"/>
        </div>
      </div>
    </div>
  );
}

export default Blog;
