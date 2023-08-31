import React from 'react'
import "./Homepage.css"
import Header from '../../Components/Header/Header'
import LivePfp from '../../Components/livePfp/LivePfp'
import FollowTab from '../../Components/FollowTab/FollowTab'
import PostCard from '../../Components/PostCard/PostCard'
import { userData } from '../../Utils/data';

function Homepage() {
  const singleUser = userData[3].users
  return (
    <>
    <Header />
    <div className='home-container'>
      <div className='recommendation-section'>
        <FollowTab />
      </div>
      <div className='timeline-section'>
        <LivePfp/>
        {
          singleUser.map((user, index)=>{
            return(
              <PostCard {...user} key={index}/>
            )
          })
        }
      </div>
    </div>
    </>
  )
}

export default Homepage