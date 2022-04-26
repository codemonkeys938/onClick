import React, { Component } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'

class GroupShow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        post_text: ''
      }
    }
  }

  handleChange = e => {
    const { form } = this.state
    form[e.target.name] = e.target.value
    this.setState({ form: form })
  }

  handleSubmit = () => {
    this.props.createPost(this.state.form, this.props.group.id)
  }

  render() {
    const { group } = this.props
    return (
      <>
        <h1>{group.name || ''}</h1>
        <h2>{group.description || ''}</h2>
        <div className='posts-container'>
          {group.posts && group.posts.map(post => (
            <div key={post.id}>
              <p>{post.post_text}</p>
            </div>
          ))}
        </div>
        <div className='form-container'>
          <Form>
            <FormGroup>
              <Label for='post_text'>New Post</Label>
              <Input
                required
                type='textarea'
                name='post_text'
                onChange={this.handleChange}
                placeholder='Add a new post'
              />
            </FormGroup>
          </Form>
          <div className='btn-container'>
            <Button onClick={this.handleSubmit}>
              Add
            </Button>
          </div>
        </div>
      </>
    )
  }
}

export default GroupShow

