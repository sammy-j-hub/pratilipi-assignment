import React from 'react';
import { Link } from 'react-router-dom'
import SignedInLinks from './signedinlinks'
import SignedOutLinks from './signedoutlinks'
import {connect} from 'react-redux'

const Navbar= (props) => {
    const { auth , profile } = props;
    console.log(auth)

    const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />; //terneary operator to show links if logged in or logged out
        return ( 
            <nav className="nav-wrapper grey darken-3">
                <div className="container">
                    <Link to='/' className="Brand-Logo">Pratilipi Blog</Link>
                    { links }
                </div>
            </nav>
         );
    }
const mapStateToProps = (state) =>{
    console.log(state)
    return {
        auth: state.firebase.auth,
        profile : state.firebase.profile //extract name and initials from firebase
    }
}
export default connect(mapStateToProps)(Navbar);