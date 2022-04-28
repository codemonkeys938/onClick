import React, { Component } from "react"
import { NavLink } from "react-router-dom"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu
} from "reactstrap"
import logo from "../assets/OnClickLogoDraft.png"

class Navigation extends Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    const { logged_in, current_user, sign_out_route } = this.props

    return (
      <Navbar color="light" light expand="md" sticky="top">
        <NavbarBrand href="/">
          {" "}
          <img src={logo} width="40px" />
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink to="/" className="nav-link" exact={true}>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/missionpage" className="nav-link">
                Our Mission
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/aboutus" className="nav-link">
                About Us
              </NavLink>
            </NavItem>
            {!logged_in && (
              <NavItem>
                <NavLink to="/signin" className="nav-link">
                  Sign In
                </NavLink>
              </NavItem>
            )}
            {!logged_in && (
              <NavItem>
                <NavLink to="/signup" className="nav-link">
                  Sign Up
                </NavLink>
              </NavItem>
            )}
            {logged_in && (
              <NavItem>
                <a href={sign_out_route} className="nav-link">
                  Sign Out
                </a>
              </NavItem>
            )}
            {logged_in && (
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  {current_user.username}
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <NavLink className="nav-link" to="/profileedit">
                      Edit Profile
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink className="nav-link" to="/newgroup">
                      New Group
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}

export default Navigation
