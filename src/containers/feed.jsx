import React, { Component, useState } from 'react';
import FeedItem from '../components/feedItem.jsx';

const Feed = () => {

  return (
    <div className="feed" >
      <h2>Feed</h2>
      <FeedItem />
    </div>
  )
};

export default Feed;