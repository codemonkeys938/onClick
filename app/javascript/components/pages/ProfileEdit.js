import React, { Component } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'

class ProfileEdit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        username: '',
        email: '',
        password: '',
        password_confirmation: '',
        current_password: ''
      }
    }
  }

  componentDidMount() {
    const { form } = this.state
    form.username = this.props.user.username
    form.email = this.props.user.email
    this.setState({ form: form })
  }

  handleChange = e => {
    const { form } = this.state
    form[e.target.name] = e.target.value
    this.setState({ form: form })
  }

  handleUpdateAccount = async () => {
    const { form } = this.state
    const user = { ...form }
    if (!form.password.length || !form.password_confirmation.length) {
      user.password = form.current_password
      user.password_confirmation = form.current_password
    }
    const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content")
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'X-CSRF-Token': csrf
      },
      body: JSON.stringify({ user: user })
    }
    try {
      const { status } = await fetch('/users', options)
      // on success the response tries to 'PATCH /localhost:3000' for a redirect for some reason
      // for now, check for 404 to know that it was it was a success until solution is found
      if (status === 404) {
        window.location.href = '/'
      }
    } catch (err) {
      console.error(err)
    }
  }

  render() {
    const { form } = this.state
    return (
      <div className='form-container'>
        <h1 className='header'>Update Your Profile</h1>
        <Form>
          <FormGroup>
            <Label for='username'>Username</Label>
            <Input
              required
              type='text'
              name='username'
              placeholder='Username'
              value={form.username}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for='email'>Email</Label>
            <Input
              required
              type='email'
              name='email'
              placeholder='Email'
              value={form.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <p>Leave the next two fields blank if you do not want to change your password.</p>
          <FormGroup>
            <Label for='password'>New Password</Label>
            <Input
              type='password'
              name='password'
              placeholder='New Password'
              value={form.password}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for='password_confirmation'>Confirm New Password</Label>
            <Input
              type='password'
              name='password_confirmation'
              placeholder='Confirm New Password'
              value={form.password_confirmation}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for='current_password'>Current Password</Label>
            <Input
              required
              type='password'
              name='current_password'
              placeholder='Current Password (we need this to confirm your changes)'
              value={form.current_password}
              onChange={this.handleChange}
            />
          </FormGroup>
        </Form>
        <div className='btn-container'>
          <Button
            className='profile-btn'
            onClick={this.handleUpdateAccount}
          >
            Update Profile
          </Button>
          <Button className='profile-btn' color='danger'>
            Delete Account
          </Button>
        </div>
      </div>
    )
  }
}

export default ProfileEdit
