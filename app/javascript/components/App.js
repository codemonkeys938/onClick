import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import ErrorPage from "./pages/ErrorPage"
import LandingPage from "./pages/LandingPage"
import MissionPage from "./pages/MissionPage"
import Index from "./pages/Index"
import AboutUs from "./pages/AboutUs"
import Footer from "./components/Footer"
import Navigation from "./components/Navigation"
import ProfileEdit from "./pages/ProfileEdit"
import NewGroup from "./pages/NewGroup"
import { Container } from "reactstrap"

class App extends Component {
  createGroup = async (group) => {
    const csrf = document
      .querySelector("meta[name='csrf-token']")
      .getAttribute("content")
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "X-CSRF-Token": csrf
      },
      body: JSON.stringify({ group: group })
    }
    try {
      return await fetch("/groups", options)
    } catch (err) {
      console.error(err)
    }
  }

  render() {
    const { logged_in, current_user } = this.props

    return (
      <Router>
        <Navigation {...this.props} />
        <Container>
          <Switch>
            {!logged_in ? (
              <Route exact path="/" component={LandingPage} />
            ) : (
              <Route
                exact
                path="/"
                render={(props) => <Index {...this.props} />}
              />
            )}
            {!logged_in && <Route exact path="/signin" component={SignIn} />}
            {!logged_in && <Route exact path="/signup" component={SignUp} />}
            {logged_in && (
              <Route
                exact
                path="/profileedit"
                render={() => {
                  return <ProfileEdit user={current_user} />
                }}
              />
            )}
            {logged_in && (
              <Route
                exact
                path="/newgroup"
                render={() => <NewGroup createGroup={this.createGroup} />}
              />
            )}
            <Route exact path="/missionpage" component={MissionPage} />
            <Route exact path="/aboutus" component={AboutUs} />
            <Route path="*" component={ErrorPage} />
          </Switch>
        </Container>
        <Footer />
      </Router>
    )
  }
}

export default App
