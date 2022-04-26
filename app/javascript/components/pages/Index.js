import React, { Component } from 'react'
import GroupIndex from '../components/GroupIndex'
import GroupShow from '../components/GroupShow'
import Post from '../components/Post'
import Profile from '../components/Profile'

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      groups: []
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

  render() {
    return (
      <>
        <h1>Index</h1>
        <Profile {...this.props} />
        <GroupIndex groups={this.state.groups} />
        <GroupShow />
        <Post posts={this.state.posts} />
      </>
    )
  }
}

export default Index

