import React, { Component, useState } from 'react';
import './style.css'

const watchList = ({ title, index }) => {
  <div className="media">
    <h2>watchList</h2>
  </div>
}

const App = () => {
  const { watchList, setWatchList } = React.useState([
    {
      text: 'test react hooks',
      isComple: false,
    },
    {
      text: 'this is hooks hooking',
      isComple: false,
    },
    {
      text: 'just look at it hook',
      isComple: false,
    }
  ]);

  return (
    <div className="app">
      <div className="watch-list">
        <h1>APPPPPPPPP</h1>
        {watchList.forEach((elem, index) => {
          <Media key={index} index={index} media={elem} />
        })}
      </div>
    </div>
  )
}

export default App;