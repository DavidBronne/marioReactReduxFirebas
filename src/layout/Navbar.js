import React from 'react';
import {NavLink} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import {connect} from 'react-redux';

const Navbar = () => {
    return (
        <nav className="nav-wraper grey darken-3">
            <div className="container">
                <NavLink to='/' className='brand-logo'>Eliot Plan</NavLink>
               
                    <SignedInLinks/>
               
                <SignedOutLinks/>
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    console.log('state :>> ', state);
    return {

    }
}

export default connect(mapStateToProps)(Navbar);