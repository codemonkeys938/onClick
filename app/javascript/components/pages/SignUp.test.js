import React from "react"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import SignUp from "./SignUp"
import { Button, Form, Input } from "reactstrap"
Enzyme.configure({ adapter: new Adapter() })

describe("When SignUp renders", () => {
  let page
  beforeEach(() => {
    page = shallow(<SignUp />)
  })

  it("displays an h1", () => {
    const header = page.find("h1")
    expect(header.text()).toEqual("Sign Up")
  })

  it("displays a form", () => {
    const form = page.find(Form)
    expect(form.length).toEqual(1)
  })

  it("displays an input for username", () => {
    const input = page.find(Input).find({ name: "username" })
    expect(input.length).toEqual(1)
  })

  it("displays an input for email", () => {
    const input = page.find(Input).find({ name: "email" })
    expect(input.length).toEqual(1)
  })

  it("displays an input for password", () => {
    const input = page.find(Input).find({ name: "password" })
    expect(input.length).toEqual(1)
  })

  it("displays an input for password confirmation", () => {
    const input = page.find(Input).find({ name: "password_confirmation" })
    expect(input.length).toEqual(1)
  })

  it("should invoke handleChange method", () => {
    const mockFn = jest.fn()
    const onChange = new mockFn()
    const input = page.find(Input).find({ name: "username" })

    input.simulate("change", {
      onchange: onChange,
      target: { value: "something" }
    })
    expect(mockFn.mock.calls.length).toEqual(1)
  })

  it("should invoke the handleSignUp method", () => {
    const mockFn = jest.fn()
    const handleSignUp = new mockFn()
    const button = page.find(Button)
    expect(button.length).toEqual(1)

    button.simulate("click", { onClick: handleSignUp })
    expect(mockFn.mock.calls.length).toEqual(1)
  })

  it("should show errors", () => {
    page.setState({ errors: ["password is too short"] })
    const error = page.find("p.error-txt")
    expect(error.length).toEqual(1)
  })
})
