import React, { Component } from 'react'

class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        email: '',
        password: ''
      }
    }
  }

  handleChange = e => {
    const { user } = this.state
    user[e.target.name] = e.target.value
    this.setState({ user: user })
  }

  handleLogin = async (e) => {
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
      const { status } = await fetch('/users/sign_in', options)
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
        <h2>Login</h2>
        <form>
          <input
            name='email'
            type='email'
            placeholder='email'
            onChange={this.handleChange}
            value={user.email}
          />
          <br />
          <input
            name='password'
            type='password'
            placeholder='password'
            onChange={this.handleChange}
            value={user.password}
          />
          <br />
          <button
            onClick={this.handleLogin}
          >
            Login
          </button>
        </form>
      </div>
    )
  }
}

export default SignIn
