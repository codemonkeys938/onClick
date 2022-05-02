import React, { Component } from "react"
import { Button, Form, FormGroup, Input, Label } from "reactstrap"

class ProfileEdit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        username: "",
        email: "",
        password: "",
        password_confirmation: ""
      },
      errors: []
    }
  }

  componentDidMount() {
    const { form } = this.state
    form.username = this.props.user.username
    form.email = this.props.user.email
    this.setState({ form: form })
  }

  handleChange = (e) => {
    const { form } = this.state
    form[e.target.name] = e.target.value
    this.setState({ form: form })
  }

  handleUpdateAccount = async () => {
    const { form } = this.state
    try {
      const csrf = document
        .querySelector("meta[name='csrf-token']")
        .getAttribute("content")
      const options = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
          "X-CSRF-Token": csrf
        },
        body: JSON.stringify({ user: form })
      }
      const res = await fetch("/users", options)
      if (res.status === 200) {
        window.location.href = "/"
      } else if (res.status === 422) {
        const json = await res.json()
        const errors = Object.keys(json).map(
          (key) => `${key[0].toUpperCase() + key.slice(1)} ${json[key]}`
        )
        this.setState({ errors: errors })
      }
    } catch (err) {
      console.error(err)
    }
  }

  handleDeleteAccout = async () => {
    try {
      if (!window.confirm("Are you sure you want to delete your account?"))
        return
      const csrf = document
        .querySelector("meta[name='csrf-token']")
        .getAttribute("content")
      const options = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
          "X-CSRF-Token": csrf
        }
      }
      const res = await fetch("/users/", options)
      if (res.status === 200) {
        window.location.href = "/"
      } else {
        this.setState({
          errors: ["Could not delete account. Try again later."]
        })
      }
    } catch (err) {
      console.error(err)
    }
  }

  render() {
    const { form, errors } = this.state
    return (
      <div className="form-container">
        <h1 className="header">Update Your Profile</h1>
        {errors.length
          ? errors.map((err, i) => (
              <p key={i} className="error-txt center-text">
                {err}
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
              value={form.username}
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
              value={form.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <p style={{ marginTop: "60px" }}>
            Leave the next two fields blank if you do not want to change your
            password.
          </p>
          <FormGroup>
            <Label for="password">New Password</Label>
            <Input
              type="password"
              name="password"
              placeholder="New Password"
              value={form.password}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password_confirmation">Confirm New Password</Label>
            <Input
              type="password"
              name="password_confirmation"
              placeholder="Confirm New Password"
              value={form.password_confirmation}
              onChange={this.handleChange}
            />
          </FormGroup>
        </Form>
        <div className="btn-container">
          <Button
            style={{ marginRight: "10px" }}
            className="edit-btn"
            onClick={this.handleUpdateAccount}
          >
            Update Profile
          </Button>
          <Button className="delete-btn" onClick={this.handleDeleteAccout}>
            Delete Account
          </Button>
        </div>
        <div className="background-image missionpage"></div>
      </div>
    )
  }
}

export default ProfileEdit
