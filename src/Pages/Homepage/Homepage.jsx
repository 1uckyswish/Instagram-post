import React from 'react'
import "./Homepage.css"
import Header from '../../Components/Header/Header'
import LivePfp from '../../Components/livePfp/LivePfp'
import FollowTab from '../../Components/FollowTab/FollowTab'

function Homepage() {
  return (
    <>
    <Header />
    <div className='home-container'>
      <div className='recommendation-section'>
        <FollowTab />
      </div>
      <div className='timeline-section'>
        <LivePfp/>
      </div>
    </div>
    </>
  )
}

export default Homepage