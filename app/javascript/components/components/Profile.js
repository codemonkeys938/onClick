import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'reactstrap'

class Profile extends Component {
  render() {
    const { current_user } = this.props
    return (
      <>
        <h1>Profile</h1>
        <p>Hi, {current_user.username}!</p>
        <NavLink to='/profileedit'>
          <Button className='profile-btn'>
            Edit Profile
          </Button>
        </NavLink>
        <br />
        <NavLink to='/newgroup'>
          <Button className='profile-btn'>
            New Group
          </Button>
        </NavLink>
      </>
    )
  }
}

export default Profile

