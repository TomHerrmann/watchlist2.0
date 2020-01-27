import React, { Component, useState } from 'react';
import './style.css'
import Navbar from './components/navbar.jsx'
import Feed from './containers/feed.jsx'

const App = () => {

  return (
    <div className="app" >
      <Navbar />
      <div className="watch-list">
        <h1>A Movie App</h1>
        <Feed />
      </div>
    </div>
  )
};

export default App;