import React, {Component} from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {Redirect} from 'react-router-dom';

class Dashboard extends Component {
    render () {
        /* console.log('this.props :>> ', this.props); */
        const {projects, auth} = this.props
        /* console.log('auth.uid :>> ', auth.uid); */
        if (!auth.uid) return <Redirect to='/signIn'/>
        
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={projects}/>
                    </div>
                    <div className="col s12 m5 offset-1">
                        <Notifications/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    /* console.log('state :>> ', state); */
    return {
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'projects'}
    ])
)(Dashboard)