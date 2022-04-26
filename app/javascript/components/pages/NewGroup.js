import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'

class NewGroup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        name: '',
        description: ''
      },
      submitted: false
    }
  }

  handleChange = e => {
    const { form } = this.state
    form[e.target.name] = e.target.value
    this.setState({ form: form })
  }

  handleSubmit = () => {
    this.props.createGroup(this.state.form)
    this.setState({ submitted: true })
  }

  render() {
    const { form } = this.state
    return (
      <div className='form-container'>
        <h1 className='header'>Create A New Group</h1>
        <Form>
          <FormGroup>
            <Label for='name'>Group Name</Label>
            <Input
              required
              type='text'
              name='name'
              placeholder='Group Name'
              value={form.name}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for='description'>Group Description</Label>
            <Input
              required
              type='textarea'
              name='description'
              id='group-description'
              placeholder='Group Description'
              value={form.description}
              onChange={this.handleChange}
            />
          </FormGroup>
        </Form>
        <div className='btn-container'>
          <Button
            className='profile-btn'
            onClick={this.handleSubmit}
          >
            Create Group
          </Button>
        </div>
        {this.state.submitted && <Redirect to='/' />}
      </div>
    )
  }
}

export default NewGroup
