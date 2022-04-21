import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'reactstrap'


class LandingPage extends Component {
  constructor(props) {
    super(props)
    this.startCountDown()
    this.state = {
      time: {
        days: null,
        hours: null,
        minutes: null,
        seconds: null
      }
    }
  }

  startCountDown = () => {
    const countDownDate = new Date("May 2, 2022 12:00:00").getTime()
    console.log(countDownDate)
    setInterval(() => {

      // Get today's date and time
      const now = new Date().getTime()

      // Find the distance between now and the count down date
      const distance = countDownDate - now

      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      const { time } = this.state
      time.days = days
      time.hours = hours
      time.minutes = minutes
      time.seconds = seconds
      this.setState({ time })
    }, 1000)
  }

  render() {
    const { time } = this.state
    return (
      <>
        <div className="section" data-name="section">
          <section className="section-2">
            <div className="div" data-name="div-1">
              <section className="section-3"></section>
            </div>
            <div className="div-2">
              <div className="div-3"><p>Something Great, Coming Soon</p></div>
              <div className="div-4"><p>05 - 02 - 2022</p></div>
              <div className='div-5' style={{ color: 'white', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <span style={{ margin: '10px' }}>
                  Days: {time.days || '00'}
                </span>
                <span style={{ margin: '10px' }}>
                  Hours: {time.hours || '00'}
                </span>
                <span style={{ margin: '10px' }}>
                  Minutes: {time.minutes || '00'}
                </span>
                <span style={{ margin: '10px' }}>
                  Seconds: {time.seconds || '00'}
                </span>
              </div>
              <div className="div-6">
                <div className="div-7">
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
