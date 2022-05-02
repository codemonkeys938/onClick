import React from "react"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import ErrorPage from "./ErrorPage"
Enzyme.configure({ adapter: new Adapter() })

describe("When ErrorPage renders", () => {
  let page
  beforeEach(() => {
    page = shallow(<ErrorPage />)
  })

  it("has a header", () => {
    const header = page.find("h1")
    expect(header.text()).toEqual("Page Not Found.")
  })
})
