import React from 'react'
import "./LivePfp.css";
import { userData } from '../../Utils/data';


function LivePfp() {
   const dataForlive= userData[1].users;
  return (
    <div className='live-container'>
        <div className='image-container'>
            {
            dataForlive.map((item)=>{return(
            <img src={item.src} alt={item.username}/>
            )
            })
            }
        </div>
        <div className='image-username-container'>
            {
            dataForlive.map((item)=>{return(
            <p>{item.username}</p>
            )
            })
            }
        </div>
    </div>
  )
}

export default LivePfp