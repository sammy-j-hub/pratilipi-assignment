import React from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import {signOut} from '../../store/actions/authActions'
const SignedInLinks= (props) => {

        return ( 
           <ul className="right">
               <li><NavLink to='/create'>New Story</NavLink></li>
               <li><a onClick={props.signOut}>Log-Out</a></li>
               <li><NavLink to='/' className=' btn btn-floating purple lighten-1'>{props.profile.initials}</NavLink></li>
           </ul>
         );
    }
const mapDispatchToProps = (dispatch) =>{
    return {
        signOut: () => dispatch(signOut()) //to trigger state change for log out
    }
}
export default connect(null, mapDispatchToProps)(SignedInLinks);