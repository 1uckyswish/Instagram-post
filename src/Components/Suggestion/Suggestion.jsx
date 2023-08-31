import React from 'react';
import "./Suggestion.css"

function Suggestion() {
  return (
    <div className='suggestion-container'>
       <div className='suggestion-header'>
        <p> Suggestion for you</p>
        <p>See all</p>
       </div>
       <div className='suggestion-card-container'>
        <div className='suggestion-card'></div>
        <div className='suggestion-card'></div>
       </div>
    </div>
  )
}

export default Suggestion