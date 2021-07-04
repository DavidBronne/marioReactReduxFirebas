import React from 'react';
import {NavLink} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import {connect, useSelector} from 'react-redux';
import {compose} from 'redux';

const Navbar = (props) => {
    /* console.log('props :>> ', props); */
    const {auth, profile} = props
    const links = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks/>
    return (
        <nav className="nav-wraper grey darken-3">
            <div className="container">
                <NavLink to='/' className='brand-logo'>Eliot Plan</NavLink>
               {links}
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    console.log('state :>> ', state);
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile // profile passed as props.profile
    }
}

export default connect(mapStateToProps)(Navbar)