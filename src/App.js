import React, {Component} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './layout/Navbar'
import Dashboard from './dashboard/Dashboard';
import ProjectDetails from './projects/ProjectDetails'
import SignIn from './auth/SignIn'
import SignUp from './auth/SignUp'
import CreateProject from './projects/CreateProject'

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
