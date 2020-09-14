import React, { Component } from 'react';
import {connect} from 'react-redux'
import {createStory} from '../../store/actions/storyactions'
import { Redirect } from 'react-router-dom'

class CreateStory extends Component {
    state = {
        title: '',
        content: ''
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        //console.log(this.state)
        this.props.createStory(this.state);
        this.props.history.push('/');
    }
    render() {
        const {auth} = this.props;
        //if auth not done, will not be able to view create story
        //will be redirected to sign in page
        if (!auth.uid) return <Redirect to='/signin' /> 
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    
                    <h5 className="grey-text darken-3">Create Story</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange}/>
                    </div>
                    
                    <div className="input-field">
                        <label htmlFor="content">Story Content</label>
                        <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create</button>
                    </div>
                </form>
               
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    console.log(state)
    return {
        auth: state.firebase.auth
    }
}
const mapDispatchToProps = dispatch => {
    return {
        createStory: (story) => dispatch(createStory(story))
    }   
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateStory)
