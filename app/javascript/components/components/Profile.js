import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'reactstrap'

class Profile extends Component {
  render() {
    const { current_user } = this.props
    return (
      <div className='profile-container'>
        <h3>Hi, {current_user.username}!</h3>
        <NavLink to='/profileedit'>
          <Button className='edit-btn profile-btn'>
            Edit Profile
          </Button>
        </NavLink>
        <br />
        <NavLink to='/newgroup'>
          <Button className='new-btn profile-btn'>
            New Group
          </Button>
        </NavLink>
      </div>
    )
  }
}

export default Profile

