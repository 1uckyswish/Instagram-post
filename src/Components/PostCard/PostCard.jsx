import {useState} from 'react'
import "./PostCard.css"
import { userData } from '../../Utils/data';
import { FiMoreHorizontal } from "react-icons/fi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FiMessageCircle } from "react-icons/fi";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { BiBookmark } from "react-icons/bi";

function PostCard({avatar, post, username}) {
    const postStyle ={
        backgroundImage: `url(${post})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }
    const [liked, setLiked] = useState(false);
    function submitPost(){
        setLiked(!liked)
    }

    const [comment, addComment] = useState('');
    function handleComment(e){
    e.preventDefault()
    addComment(e.target.value);
    }

  return (
    <div className='post-card-container'>
     <div className='post-card-header'>
        <div className='post-card-image-container'>
            <img src={avatar} />
            <p>{username}</p>
        </div>
        <FiMoreHorizontal />
     </div>
     <div className='user-image-post' style={postStyle}></div>
     <div className='post-card-icon-container'>
        <div className='post-card-action-container'>
            {
                liked?
                <AiFillHeart style={{color: 'red'}} onClick={submitPost}/>
                :
                <AiOutlineHeart onClick={submitPost}/>
            }
            <FiMessageCircle />
            <IoPaperPlaneOutline />
        </div>
        <BiBookmark />
    </div>
    <div className='post-card-comment-container'>
        <p>741,386 Likes</p>
        <p>lewishamilton <span>Parabéns Ayrton, minha inspiração sempre 🇧🇷💫</span></p>
        <p>see translation</p>
        <p>View all 13,384 comments</p>
        {
            comment && <p>{comment}</p>
        }
        <form onSubmit={handleComment}>
             <input type='text' placeholder='Add a comment...' onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleComment(e);
                        }
                    }}/>
        </form>
    </div>
    </div>
  )
}

export default PostCard
