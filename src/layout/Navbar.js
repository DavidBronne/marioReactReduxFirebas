import React from 'react';
import {NavLink} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import {connect} from 'react-redux';

const Navbar = (props) => {
    /* console.log('props :>> ', props); */
    const {auth} = props
    const links = auth.uid ? <SignedInLinks/> : <SignedOutLinks/>
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
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Navbar);