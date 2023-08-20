import React from 'react'
import "./ActionBox.css"
import { AiOutlineHeart } from "react-icons/ai";
import { FiMessageCircle } from "react-icons/fi";
import { IoPaperPlaneOutline } from "react-icons/io5";


function ActionBox() {
  return (
    <div className='action-container'>
        <div className='action-icon-container'>
            <AiOutlineHeart />
            <FiMessageCircle />
            <IoPaperPlaneOutline />
        </div>
    </div>
  )
}

export default ActionBox