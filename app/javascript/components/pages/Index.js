import React, { Component } from 'react'
import GroupIndex from '../components/GroupIndex'
import GroupShow from '../components/GroupShow'
import Post from '../components/Post'
import Profile from '../components/Profile'
import RecentPosts from '../components/RecentPosts'

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      groups: []
    }
  }

  componentDidMount() {
    this.readGroups()
  }

  readGroups = () => {
    fetch("/groups")
      .then(response => response.json())
      .then(groupArray => this.setState({ groups: groupArray }))
      .catch(errors => console.log("Groups read errors:", errors))
  }

  render() {
    return (
      <>
        <h1>Index</h1>
        <Profile {...this.props} />
        <GroupIndex />
        <GroupIndex groups={this.state.groups} />
        <GroupShow />
        <Post />
        <RecentPosts />
      </>
    )
  }
}

export default Index

