import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

class App extends Component {
  render() {
    const {
      logged_in,
      current_user
    } = this.props
    console.log(logged_in, current_user)
    return (
      <Router>
        <Switch>
          {!logged_in &&
            <Route
              exact
              path='/signin'
              component={SignIn}
            />
          }
          {!logged_in &&
            <Route
              exact
              path='/signup'
              component={SignUp}
            />
          }
        </Switch>
      </Router>
    )
  }
}

export default App
