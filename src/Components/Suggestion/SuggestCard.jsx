import {useState} from 'react'
import { VscError } from "react-icons/vsc";
function SuggestCard({src, following, username}) {
    const [follow, setFollow]=useState(false);
    function handleFollow(){
        setFollow(!follow);
    }
  return (
    <div className='suggestion-card'>
            <VscError id='cancel-btn'/>
            <img src={src}/>
            <p>{username}</p>
            <p>{following}</p>
               {
            follow?
            <button onClick={handleFollow} style={{background: 'red'}}>Unfollow</button>
            :
            <button onClick={handleFollow}>Follow</button>
            }
        </div>
  )
}

export default SuggestCard