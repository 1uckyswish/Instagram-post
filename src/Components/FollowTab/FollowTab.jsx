import React from 'react';
import "./FollowTab.css";
import { userData } from '../../Utils/data';

function FollowTab() {
    console.log(userData[0].users)
    const follow = userData[0].users.slice(1)
  return (
    <div className='follow-container'>
        <div className='main-box'>
            <div className='first-main-box'>
                <img src={userData[0].users[0].src} />
                <div className='main-box-info'>
                    <p>{userData[0].users[0].username}</p>
                    <p>{userData[0].users[0].following}</p>
                </div>
            </div>
             <p>Switch</p>
        </div>
        <div className='suggestion-box'>
            <p>Suggestions for you</p>
            <p>See All</p>
        </div>
       {
        follow.map((item, index)=>{
            return(
                <div className='main-box' key={index}>
            <div className='first-main-box'>
                <img src={item.src} />
                <div className='main-box-info'>
                    <p>{item.username}</p>
                    <p>{item.following}</p>
                </div>
            </div>
             <p>Follow</p>
        </div>
            )
        })
       } 
    </div>
  )
}

export default FollowTab