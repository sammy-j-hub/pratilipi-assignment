import React, { Component } from 'react';
import StoryList from '../storypage/storylist'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import {compose } from 'redux'
import { Redirect } from 'react-router-dom'

class DashBoard extends Component {
    
    render() { 
        const { storyplural , auth  } = this.props;
        if (!auth.uid) return <Redirect to='/signin' /> 
        return ( 
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 ">
                        <StoryList storyplural={storyplural} />
                    </div>
                       
                   
                </div>
            </div>
         );
    }
}
const mapStateToProps = (state) =>{
    console.log(state)
    return {
        storyplural: state.firestore.ordered.stories, //to showcase sotries
        //styate.story.storyDummy 
        auth: state.firebase.auth //extract auth object

    }   
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection : 'stories', orderBy: ['createdAt', 'desc']} // query collection of stories
       
    ])
    )(DashBoard);