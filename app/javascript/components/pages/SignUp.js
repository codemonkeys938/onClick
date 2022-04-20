import React, { Component } from 'react'

class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        username: '',
        email: '',
        password: '',
        password_confirmation: ''
      }
    }
  }

  handleChange = e => {
    const { user } = this.state
    user[e.target.name] = e.target.value
    this.setState({ user: user })
  }

  handleSignUp = async (e) => {
    e.preventDefault()
    const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content")
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'X-CSRF-Token': csrf
      },
      body: JSON.stringify({ user: this.state.user })
    }
    try {
      const { status } = await fetch('/users', options)
      if (status === 200) {
        window.location.href = '/'
      }
    } catch (err) {
      console.error(err)
    }
  }

  render() {
    const { user } = this.state
    return (
      <div>
        <h1>Sign Up</h1>
        <form>
          <input
            type="text"
            name='username'
            placeholder="Username"
            value={user.username}
            onChange={this.handleChange}
          />
          <br />
          <input
            type="email"
            name='email'
            placeholder="Email"
            value={user.email}
            onChange={this.handleChange}
          />
          <br />
          <input
            type="password"
            name='password'
            placeholder="Password"
            value={user.password}
            onChange={this.handleChange}
          />
          <br />
          <input
            type="password"
            name='password_confirmation'
            placeholder="Confirm Password"
            value={user.password_confirmation}
            onChange={this.handleChange}
          />
          <br />
          <button
            onClick={this.handleSignUp}
          >
            Sign Up
          </button>
        </form>
      </div>
    )
  }
}

export default SignUp
