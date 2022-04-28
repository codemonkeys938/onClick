import React, { Component } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'

class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        email: '',
        password: ''
      },
      error: false
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
      } else {
        this.setState({ error: true })
      }
    } catch (err) {
      this.setState({ error: true })
    }
  }

  render() {
    const { user, error } = this.state
    return (
      <div className='form-container'>
        <h1 className='header'>Sign In</h1>
        {error ?
          <p className='error-txt center'>Invalid username or password!</p> :
          null
        }
        <Form>
          <FormGroup>
            <Label for='email'>Email</Label>
            <Input
              required
              name='email'
              type='email'
              placeholder='Email'
              onChange={this.handleChange}
              value={user.email}
            />
          </FormGroup>
          <FormGroup>
            <Label for='password'>Password</Label>
            <Input
              required
              name='password'
              type='password'
              placeholder='Password'
              onChange={this.handleChange}
              value={user.password}
            />
          </FormGroup>
        </Form>
        <div className='btn-container'>
          <Button onClick={this.handleLogin}>
            Sign In
          </Button>
        </div>
      </div>
    )
  }
}

export default SignIn
