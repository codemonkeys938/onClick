import React, { Component } from 'react'
import GroupIndex from '../components/GroupIndex'
import GroupShow from '../components/GroupShow'
import Post from '../components/Post'
import Profile from '../components/Profile'

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      groups: [],
      group: {
        id: 1,
        user_id: 1,
        name: 'General Chat',
        description: 'This is the general chat.',
        posts: [
          {
            id: 1,
            user_id: 1,
            group_id: 1,
            post_text: 'YO this is a post.'
          }
        ]
      }
    }
  }

  componentDidMount() {
    this.readGroups()
    this.readPosts()
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
      .then(postArray => this.setState({ posts: postArray }))
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
      .then(() => this.readGroups())
      .catch(errors => console.error(errors))
  }

  changeGroupView = (group) => {
    this.setState({ group: group })
  }

  render() {
    return (
      <>
        <h1>Index</h1>
        <Profile {...this.props} />
        <GroupIndex groups={this.state.groups} changeGroupView={this.changeGroupView} />
        <GroupShow group={this.state.group} createPost={this.createPost} />
        <Post posts={this.state.posts} />
      </>
    )
  }
}

export default Index

