import React from 'react'
import './App.css'
import { Footer, Blog, Possibility, Features, WhatGPT, Header } from './containers';
import { CTA, Brand, Navbar } from './components';

const App = () => {
  return (
    <div className='app'>
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
      
    </div>
  )
}

export default App;
