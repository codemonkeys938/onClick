import React from "react"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import ProfileEdit from "./ProfileEdit"
import { Button, Form, Input } from "reactstrap"
Enzyme.configure({ adapter: new Adapter() })

const user = jest.fn()
const props = {
  user
}

describe("When ProfileEdit renders", () => {
  let page
  beforeEach(() => {
    page = shallow(<ProfileEdit {...props} />)
  })

  it("displays a header", () => {
    const header = page.find("h1")
    expect(header.text()).toEqual("Update Your Profile")
  })

  it("displays a form", () => {
    const form = page.find(Form)
    expect(form.length).toEqual(1)
  })

  it("displays an input for username", () => {
    const form = page.find(Form).find({ name: "username" })
    expect(form.length).toEqual(1)
  })

  it("displays an input for email", () => {
    const form = page.find(Form).find({ name: "email" })
    expect(form.length).toEqual(1)
  })

  it("displays an input for password", () => {
    const form = page.find(Form).find({ name: "password" })
    expect(form.length).toEqual(1)
  })

  it("displays an input for password_confirmation", () => {
    const form = page.find(Form).find({ name: "password_confirmation" })
    expect(form.length).toEqual(1)
  })

  it("should invoke the handleChange method", () => {
    const inputs = page.find(Input)
    inputs.forEach((input) => {
      if (input.name === "email") {
        input.simulate("change", { target: { value: "some@email.com" } })
      } else {
        input.simulate("change", { target: { value: "sometestvalue" } })
      }
    })
  })

  it("should have a button to update and delete profile", () => {
    const buttons = page.find(Button)
    expect(buttons.length).toEqual(2)
  })
})
