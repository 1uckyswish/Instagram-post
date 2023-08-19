import React from 'react'
import "./Post.css"
import SuitMan from "../../../src/assets/Suit.png"
import Comment from '../Comment/Comment'
import pfp1 from "../../assets/Pfp/Image1.png"

function Post() {
  return (
    <div className='post-container'>
      <img src={SuitMan} alt="Post image"/>
        <div className='comment-section'>
          <div className='comment-header'>

            <div className='username-section'>
              <div className='img-user-box'>
                 <img src={pfp1} />
                <div className='info-box'>
                <p>Hello from china</p>
                <p>2013</p>
              </div>
              </div>
              <p>hi</p>
            </div>

          </div>
        </div>
    </div>
  )
}

export default Post
