import React, { Component } from 'react'
import { Button, Card, CardText, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

class GroupShow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        post_text: '',
      },
      modal: false,
      editPost: {}
    }
  }

  handleChange = e => {
    const { form } = this.state
    form[e.target.name] = e.target.value
    this.setState({ form: form })
  }

  handleEditChange = e => {
    const { editPost } = this.state
    editPost[e.target.name] = e.target.value
    this.setState({ editPost: editPost })
  }

  handleSubmit = () => {
    this.props.createPost(this.state.form, this.props.group.id)
    const { form } = this.state
    form.post_text = ''
    this.setState({ form: form })
  }

  handleUpdate = () => {
    const { user_id, updated_at, created_at, ...rest } = this.state.editPost
    this.props.updatePost(rest)
    this.toggle()
  }

  handleDelete = (post) => {
    const { id } = post
    this.props.deletePost(id)
  }

  openEditModal = (post) => {
    this.setState({ editPost: { ...post } })
    this.toggle()
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    })
  }

  render() {
    const { group, currentUser } = this.props
    const { form, editPost } = this.state
    if (!group.id) return
    return (
      <>
        <h1>{group.name || ''}</h1>
        <h2>{group.description || ''}</h2>
        <div className='posts-container'>
          {group.posts && group.posts.map(post => (
            <Card key={post.id}>
              <CardText>
                {post.post_text}
              </CardText>
              {post.user_id === currentUser.id ?
                <div className='btn-container'>
                  <Button onClick={() => this.openEditModal(post)}>
                    Edit
                  </Button>
                  <Button
                    color='danger'
                    onClick={() => this.handleDelete(post)}
                  >
                    Delete
                  </Button>
                </div>
                : null
              }
            </Card>
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
                value={form.post_text}
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
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Edit Post</ModalHeader>
          <ModalBody>
            <Input
              required
              name='post_text'
              type='textarea'
              value={editPost.post_text}
              onChange={this.handleEditChange}
            />
          </ModalBody>
          <ModalFooter>
            <Button
              color="danger"
              onClick={this.toggle}
            >
              Cancel
            </Button>
            <Button onClick={this.handleUpdate}>
              Edit Post
            </Button>
          </ModalFooter>
        </Modal>
      </>
    )
  }
}

export default GroupShow

