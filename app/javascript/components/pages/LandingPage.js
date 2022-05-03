import React, { Component } from "react"
import { NavLink } from "react-router-dom"
import { Button } from "reactstrap"

import landing from "../assets/landing.png"
import landingChopped from "../assets/Landing-chopped.png"

class LandingPage extends Component {
  render() {
    return (
      <>
        <div className="btn-container landing-page-btns">
          <NavLink to="/signup" className="nl">
            <Button id="signUpButton">Sign Up</Button>
          </NavLink>
          <NavLink to="/signin" className="nl">
            <Button id="signUpButton">Sign In</Button>
          </NavLink>
        </div>
        <img
          src={window.innerWidth >= 600 ? landing : landingChopped}
          className="landing-page-bg"
        />
      </>
    )
  }
}

export default LandingPage
