import React from "react"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import NewGroup from "./NewGroup"
import { Form, Input } from "reactstrap"
Enzyme.configure({ adapter: new Adapter() })

const createGroup = jest.fn()
const props = {
  createGroup
}

describe("When NewGroup renders", () => {
  let page
  beforeEach(() => {
    page = shallow(<NewGroup {...props} />)
  })

  it("displays a header", () => {
    const header = page.find("h1")
    expect(header.text()).toEqual("Create A New Group")
  })

  it("displays a form", () => {
    const form = page.find(Form)
    expect(form.length).toEqual(1)
  })

  it("displays an input for group name", () => {
    const input = page.find(Input).find({ name: "name" })
    expect(input.length).toEqual(1)
  })

  it("displays an input for group description", () => {
    const input = page.find(Input).find({ name: "description" })
    expect(input.length).toEqual(1)
  })
})
