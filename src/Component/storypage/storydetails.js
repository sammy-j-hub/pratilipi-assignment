import React from 'react'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'


const StoryDetails = (props) => {
    const {auth , story } = props;
    //if auth not done, will not be able to view create story
    //will be redirected to sign in page
    if (!auth.uid) return <Redirect to='/signin' /> 

    if(story){
        return(
            <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card content">
                    <span className="card-title">{story.title}</span>
                        <p>{story.content}</p>
                </div>
                <div className="card-action z-depth-0 grey lighten-4 grey-text">
                    <div>Posted By {story.authorFirstName} {story.authorLastName} </div>
                    <div>{moment(story.createdAt.toDate()).calendar()}</div>
                    <div>Current Views : {story.curr_view} </div>
                    <div>Total Reads : {story.total_read} </div>

                </div>
            </div>
        </div>
        )
        
    } else{
        return (
                <div className="container center">
                    <p>Loading Story....</p>
                </div>
            )
    }
    
}
const mapStateToProps = (state, ownProps) =>{
    console.log(state);
    const id = ownProps.match.params.id;
    const stories = state.firestore.data.stories;  
    const story = stories ? stories[id] : null 
    return {
        story : story,
        auth: state.firebase.auth
    }
}
export default compose(
        connect(mapStateToProps),
        firestoreConnect([
            {collection : 'stories'}
        ])
)(StoryDetails)