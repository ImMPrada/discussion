import React from 'react';
import { LikesContainer } from '../../atoms'
import { Message } from '../../molecules';
import './styles.css'

const Post = () => {

  return(
    <div className="post">
      <div className="post-likes-container">
        <LikesContainer />
      </div>
      <div className="post-message">
        <Message />
      </div>
    </div>
  )
}

export default Post;
