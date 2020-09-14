import React from 'react';
import moment from 'moment'
const StorySummary = ({story}) =>{
    return(
        <div className="card z-depth-0 story-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{story.title}</span>
                    <p>Posted by {story.authorFirstName} {story.authorLastName} </p>
                    <p className="grey-text">{moment(story.createdAt.toDate()).calendar()}</p>
                </div>
            </div>
    )
}
export default StorySummary