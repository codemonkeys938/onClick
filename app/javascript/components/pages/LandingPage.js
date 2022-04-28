import React, { Component } from "react"
import { NavLink } from "react-router-dom"
import { Button } from "reactstrap"

import landing from "../assets/landing.png"
import landingChopped from "../assets/Landing-chopped.png"

class LandingPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: {
        days: null,
        hours: null,
        minutes: null,
        seconds: null,
      },
    }
  }

  componentDidMount() {
    this.startCountDown()
  }

  startCountDown = () => {
    const countDownDate = new Date("May 2, 2022 12:00:00").getTime()
    setInterval(() => {
      // Get today's date and time
      const now = new Date().getTime()

      // Find the distance between now and the count down date
      const distance = countDownDate - now

      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      const { time } = this.state
      time.days = days.toString().length === 1 ? `0${days}` : days
      time.hours = hours.toString().length === 1 ? `0${hours}` : hours
      time.minutes = minutes.toString().length === 1 ? `0${minutes}` : minutes
      time.seconds = seconds.toString().length === 1 ? `0${seconds}` : seconds
      this.setState({ time: time })
    }, 1000)
  }

  render() {
    const { time } = this.state
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h3
            style={{
              textAlign: "right",
              marginTop: "100px",
              marginRight: "120px",
            }}
          >
            Time Until Something Great
          </h3>
          <div
            style={{
              display: "flex",
              justifyContent: "right",
              marginRight: "120px",
            }}
          >
            <span style={{ margin: "10px" }}>Days: {time.days || "00"}</span>
            <span style={{ margin: "10px" }}>Hours: {time.hours || "00"}</span>
            <span style={{ margin: "10px" }}>
              Minutes: {time.minutes || "00"}
            </span>
            <span style={{ margin: "10px" }}>
              Seconds: {time.seconds || "00"}
            </span>
          </div>
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
