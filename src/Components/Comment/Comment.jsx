import {useState} from 'react'
import './Comment.css'
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

function Comment({data}) {
  const [liked, SetLiked] = useState(false);
  return (
    <div className='single-comment'>
      <div className='comment-info'>
        <img src={data.Image} />
        <div className='user-caption-box'>
           <div className='user-caption'>
          <p>{data.Username} <span>{data.Caption}</span><span style={{color: '#00376B'}}>{data.HashTags}</span></p>
        </div>
        <div className='user-actions'>
        <p>{data.TimeStamp}</p>
        <p id='action-bold'>{data.Like}</p>
        <p id='action-bold'>Reply</p>
        <p id='action-bold'>See Translation</p>
        </div>
        </div>
      </div>
      {
      liked?
      <AiFillHeart onClick={()=>SetLiked(!liked)} id='red-heart'/>
      :
      <AiOutlineHeart onClick={()=>SetLiked(!liked)} id='clear-heart' />
      }
      </div>
  )
}

export default Comment