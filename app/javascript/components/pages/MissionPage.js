import React, { Component } from 'react'
import logo from '../assets/OnClickLogoDraft.png'


class MissionPage extends Component {

  render() {
    return (
      <>
        <div className="missionpage">
          <h1>Our Mission</h1>
          <div className="missiontext">
            <p>Want to connect with other people that are more like you? onClick is an application where you can create or join groups based on your interests. onClick allows our users to find connections and friendships through group messaging boards. Find a new friend, your next business partner, a mentor or someone just to chat with for a little. onClick makes it possible and easy.</p></div>
          <div className="missionlogo">
            <img src={logo} width="280px" />
          </div>
        </div>
      </>
    )
  }
}

export default MissionPage
