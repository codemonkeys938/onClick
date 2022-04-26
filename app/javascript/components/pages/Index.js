import React, { Component } from 'react'
import GroupIndex from '../components/GroupIndex'
import GroupShow from '../components/GroupShow'
import Post from '../components/Post'
import Profile from '../components/Profile'
import RecentPosts from '../components/RecentPosts'

class Index extends Component {

  render() {
    return (
      <>
        <h1>Index</h1>
        <Profile {...this.props} />
        <GroupIndex />
        <GroupShow />
        <Post />
        <RecentPosts />
      </>
    )
  }
}

export default Index

