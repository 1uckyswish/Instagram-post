import "./Suggestion.css"
import { userData } from '../../Utils/data';
import SuggestCard from './SuggestCard';

function Suggestion() {
    const suggestions = userData[2].users.slice(0,2);
  return (
    <div className='suggestion-container'>
       <div className='suggestion-header'>
        <p> Suggestion for you</p>
        <p>See all</p>
       </div>
       <div className='suggestion-card-container'>
        {
            suggestions.map((item)=>{
                return <SuggestCard {...item}/>
            })
        }
       </div>
    </div>
  )
}

export default Suggestion