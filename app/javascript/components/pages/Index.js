import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import GroupIndex from '../components/GroupIndex'
import GroupShow from '../components/GroupShow'
import Post from '../components/Post'
import Profile from '../components/Profile'

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      groups: [],
      group: {}
    }
  }

  componentDidMount() {
    this.updateGroupsAndPosts()
  }

  componentDidUpdate(prevProps, prevState) {
    if (!this.state.group.name) {
      const generalGroup = this.state.groups.find(group => group.name === 'General')
      if (!generalGroup) return
      this.updateGroupView(generalGroup)
    } else if (prevState.groups !== this.state.groups) {
      const updatedGroup = this.state.groups.find(group => group.id === this.state.group.id)
      this.updateGroupView(updatedGroup)
    }
  }

  readGroups = () => {
    fetch("/groups")
      .then(response => response.json())
      .then(groupArray => this.setState({ groups: groupArray }))
      .catch(errors => console.log("Groups read errors:", errors))
  }

  readPosts = () => {
    fetch("/posts")
      .then(response => response.json())
      .then(postArray => {
        const sorted = postArray.slice(-5).reverse()
        this.setState({ posts: sorted })
      })
      .catch(errors => console.log("Post read errors", errors))
  }

  createPost = (post, id) => {
    const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content")
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'X-CSRF-Token': csrf
      },
      body: JSON.stringify({ post: { ...post, group_id: id } })
    }
    fetch('/posts', options)
      .then(response => response.json())
      .then(() => this.updateGroupsAndPosts())
      .catch(errors => console.error(errors))
  }

  updatePost = (updatedPost) => {
    const { id, ...rest } = updatedPost
    const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content")
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'X-CSRF-Token': csrf
      },
      body: JSON.stringify({ post: rest })
    }
    fetch(`/posts/${id}`, options)
      .then(response => response.json())
      .then(() => this.updateGroupsAndPosts())
      .catch(errors => console.error(errors))
  }

  deletePost = (id) => {
    const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content")
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'X-CSRF-Token': csrf
      }
    }
    fetch(`/posts/${id}`, options)
      .then(response => response.json())
      .then(() => this.updateGroupsAndPosts())
      .catch((errors) => console.error(errors))
  }

  deleteGroup = (id) => {
    const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content")
    fetch(`/groups/${id}`, {
      headers: {
        "Content-Type": "application/json",
        'X-Requested-With': 'XMLHttpRequest',
        'X-CSRF-Token': csrf
      },
      method: "DELETE"
    })
      .then(response => response.json())
      .then(() => {
        const generalGroup = this.state.groups.find(group => group.name === 'General')
        this.updateGroupView(generalGroup)
        this.updateGroupsAndPosts()
      })
      .catch(errors => console.log("delete errors:", errors))
  }

  updateGroupsAndPosts = () => {
    this.readGroups()
    this.readPosts()
  }

  updateGroupView = (group) => {
    this.setState({ group: group })
  }

  render() {
    return (
      <>
        <h1>Index</h1>
        <Profile {...this.props} />
        <GroupIndex
          groups={this.state.groups}
          updateGroupView={this.updateGroupView}
        />
        <GroupShow
          group={this.state.group}
          createPost={this.createPost}
          updatePost={this.updatePost}
          deletePost={this.deletePost}
          deleteGroup={this.deleteGroup}
          currentUser={this.props.current_user}
        />
        <Post posts={this.state.posts} />
        {this.state.submitted && <Redirect to='/' />}
      </>
    )
  }
}

export default Index
