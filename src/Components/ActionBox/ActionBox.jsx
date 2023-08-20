import {useState} from 'react'
import "./ActionBox.css"
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FiMessageCircle } from "react-icons/fi";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { BiBookmark } from "react-icons/bi";
import pfp1 from "../../assets/Pfp/Image1.png"
import { GoSmiley } from "react-icons/go";



function ActionBox() {
    const [liked, SetLiked] = useState(false);
  return (
    <div className='action-container'>
        <div className='action-icon-container'>
          <div className='three-icon-container'>
             {
             liked?
            <AiFillHeart onClick={()=>SetLiked(!liked)} style={{color: 'red'}}/>
            :
            <AiOutlineHeart onClick={()=>SetLiked(!liked)} />
            }
            <FiMessageCircle />
            <IoPaperPlaneOutline />
          </div>
            <div>
              <BiBookmark />
            </div>
        </div>
        <div className='action-liked-container'>
          <div className='post-liked-container'>
            <img src={pfp1} />
            <p>Liked by <span>openaidalle</span> and <span>1,000 others</span> </p>
          </div>
          <div className='post-timestamp'>
            <p>3 DAYS AGO</p>
          </div>
        </div>
        <div className='action-add-comment-container'>
          <div className='icon-comment-section'>
          <GoSmiley />
          <p>Add a Comment...</p>
          </div>
          <p id='add-post-btn'>Post</p>
        </div>
    </div>
  )
}

export default ActionBox