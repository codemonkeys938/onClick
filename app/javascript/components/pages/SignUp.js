import React, { Component } from "react"
import { NavLink } from "react-router-dom"
import { Button, Form, FormGroup, Input, Label } from "reactstrap"

class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        username: "",
        email: "",
        password: "",
        password_confirmation: ""
      },
      errors: []
    }
  }

  handleChange = (e) => {
    const { user } = this.state
    user[e.target.name] = e.target.value
    this.setState({ user: user })
  }

  handleSignUp = async (e) => {
    e.preventDefault()
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
      body: JSON.stringify({ user: this.state.user })
    }
    try {
      const res = await fetch("/users", options)
      if (res.status === 200) {
        window.location.href = "/"
      } else if (res.status === 422) {
        const json = await res.json()
        const errors = Object.keys(json).map((key) => {
          const error = `${key[0].toUpperCase() + key.slice(1)} ${json[key]}`
          return error
        })
        this.setState({ errors: errors })
      }
    } catch (err) {
      console.error(err)
    }
  }

  render() {
    const { user, errors } = this.state
    return (
      <div className="form-container">
        <h1 className="header">Sign Up</h1>
        {errors
          ? errors.map((error, i) => (
              <p className="error-txt center-text" key={i}>
                {error}
              </p>
            ))
          : null}
        <Form>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input
              required
              type="text"
              name="username"
              placeholder="Username"
              value={user.username}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              required
              type="email"
              name="email"
              placeholder="Email"
              value={user.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              required
              type="password"
              name="password"
              placeholder="Password"
              value={user.password}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password_confirmation">Confirm Password</Label>
            <Input
              required
              type="password"
              name="password_confirmation"
              placeholder="Confirm Password"
              value={user.password_confirmation}
              onChange={this.handleChange}
            />
          </FormGroup>
        </Form>
        <div className="btn-container">
          <Button onClick={this.handleSignUp} className="new-btn">
            Sign Up
          </Button>
        </div>
        <p>
          Already have an account? <NavLink to="/signin">Sign in here!</NavLink>
        </p>
        <div className="background-image missionpage"></div>
      </div>
    )
  }
}

export default SignUp
