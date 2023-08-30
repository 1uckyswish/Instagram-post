import React from 'react'
import "./Post.css"
import SuitMan from "../../../src/assets/Suit.png"
import Comment from '../Comment/Comment'
import pfp1 from "../../assets/Pfp/Image1.png"
import pfp2 from "../../assets/Pfp/Image2.png"
import { FiMoreHorizontal } from "react-icons/fi";
import {data} from '../../Utils/data'
import ActionBox from '../ActionBox/ActionBox'
import { MdArrowForwardIos } from "react-icons/md";

function Post() {
  return (
    <div className='post-container'>
      <img src={SuitMan} alt="Post image"/>
      <MdArrowForwardIos id='right-arrow'/>
        <div className='comment-section'>
          <div className='comment-header'>

            <div className='username-section'>
              <div className='img-user-box'>
                 <img src={pfp2} id="image-under"/>
                 <img src={pfp1} id="image-over"/>
                <div className='info-box'>
                <p><span>{data[0].Username}</span> and <span>Openaidalle</span></p>
                <p>2073</p>
              </div>
              </div>
              <FiMoreHorizontal />
            </div>
          </div>
             {
              data.map((item)=> <Comment data={item} key={item.Id}/>)
             }
            <ActionBox />
        </div>
    </div>
  )
}

export default Post
