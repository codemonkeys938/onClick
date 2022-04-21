import React, { Component } from 'react'
import errorgif from '../assets/404.gif'

class ErrorPage extends Component {

  render() {
    return (
      <>
        <div className="errorpage">
          <h1>Page Not Found.</h1>
          <img src={errorgif} id="box" alt="notfound" height="350px" width="450px" />
        </div>
      </>
    )
  }
}

export default ErrorPage

