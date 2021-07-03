import React, {Component} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './component/layout/Navbar'
import Dashboard from './component/dashboard/Dashboard';
import ProjectDetails from './component/projects/ProjectDetails'
import SignIn from './component/auth/SignIn'
import SignUp from './component/auth/SignUp'
import CreateProject from './component/projects/CreateProject'

class App extends Component  {
  render () {
    return (
      <Router>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path='/' component={Dashboard}></Route>
            <Route path='/project/:id' component={ProjectDetails}></Route>
            <Route path='/signIn' component={SignIn}></Route>
            <Route path='/signUp' component={SignUp}></Route>
            <Route path='/create' component={CreateProject}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
