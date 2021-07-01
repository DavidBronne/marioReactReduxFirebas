import React, {Component} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './layout/Navbar'
import Dashboard from './dashboard/Dashboard'

class App extends Component  {
  render () {
    return (
      <Router>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route path='/' component={Dashboard}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
