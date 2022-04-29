import React from "react"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import SignIn from "./SignIn"
import { Form, Input } from "reactstrap"
Enzyme.configure({ adapter: new Adapter() })

describe("When SignIn renders", () => {
  let page
  beforeEach(() => {
    page = shallow(<SignIn />)
  })

  it("displays an h1", () => {
    const header = page.find("h1")
    expect(header.text()).toEqual("Sign In")
  })

  it("displays a form", () => {
    const form = page.find(Form)
    expect(form.length).toEqual(1)
  })

  it("displays an input for email", () => {
    const input = page.find(Input).find({ name: "email" })
    expect(input.length).toEqual(1)
  })

  it("displays an input for password", () => {
    const input = page.find(Input).find({ name: "password" })
    expect(input.length).toEqual(1)
  })
})
