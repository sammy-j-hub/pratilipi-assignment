import React from 'react';
import StorySummary from './storysummary'
import {Link} from 'react-router-dom'
const StoryList = ({storyplural}) =>{
    
    return(
        <div className="story-list section">
            { storyplural && storyplural.map(story =>{
                    return(
                    <Link to={'/story/' + story.id} key={story.id} >
                        <StorySummary story={story}  />
                    </Link>
                    )

                })}
        </div>
    )
}

export default StoryList