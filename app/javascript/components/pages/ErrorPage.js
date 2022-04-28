import React, { Component } from 'react'
import errorgif from '../assets/404.gif'

class ErrorPage extends Component {

  render() {
    return (
      <>
        <div className="errorpage">
          <h1>Page Not Found.</h1>
          <br />
          <img src={errorgif} id="box" alt="notfound" height="350px" width="450px" />
          <div className="background-image missionpage">
          </div>
        </div>
      </>
    )
  }
}

export default ErrorPage

