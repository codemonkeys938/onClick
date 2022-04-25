import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import ErrorPage from './pages/ErrorPage'
import LandingPage from './pages/LandingPage'
import MissionPage from './pages/MissionPage'
import Index from './pages/Index'
import AboutUs from './pages/AboutUs'
import Profile from './components/Profile'
import GroupIndex from './components/GroupIndex'
import GroupShow from './components/GroupShow'
import Post from './components/Post'
import RecentPosts from './components/RecentPosts'
import Footer from './components/Footer'
import Navigation from './components/Navigation'

class App extends Component {
  render() {
    const {
      logged_in,
      current_user
    } = this.props
    console.log(logged_in, current_user)
    return (
      <Router>
        <Navigation {...this.props} />
        <Index />
        <GroupIndex />
        <GroupShow />
        <RecentPosts />
        <Post />
        <Profile />
        <Switch>
          {!logged_in &&
            <Route
              exact path='/'
              component={LandingPage} />
          }
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
          <Route exact path='/missionpage' component={MissionPage} />
          <Route exact path='/aboutus' component={AboutUs} />
          <Route path='*' component={ErrorPage} />
        </Switch>
        <Footer />
      </Router>
    )
  }
}

export default App
