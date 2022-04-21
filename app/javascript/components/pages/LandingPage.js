import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'reactstrap'


class LandingPage extends Component {

  render() {
    return (
      <>

        <div class="section" data-name="section">
          <section class="section-2">
            <div class="div" data-name="div-1">
              <section class="section-3"></section>
            </div>
            <div class="div-2">
              <div class="div-3"><p>Something Great, Coming Soon</p></div>
              <div class="div-4"><p>05 - 02 - 2022</p></div>
              <div class="div-5"></div>
              <div class="div-6">
                <div class="div-7">
                  <NavLink to='/signup'>
                    <Button
                      id="signUpButton"
                      name="submit"
                    >
                      Sign Up
                    </Button>
                  </NavLink>
                  <NavLink to='/signin'>
                    <Button
                      id="signUpButton"
                      name="submit"
                    >
                      Sign In
                    </Button>
                  </NavLink>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    )
  }
}

export default LandingPage
