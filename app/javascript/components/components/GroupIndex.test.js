import React from "react"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import GroupIndex from "./GroupIndex"
import { Card, CardGroup } from "reactstrap"

Enzyme.configure({ adapter: new Adapter() })

const groups = [
  {
    description: "test description",
    name: "group name",
    id: 1
  }
]

describe("When GroupIndex renders", () => {
  let groupindex
  beforeEach(() => {
    groupindex = shallow(<GroupIndex groups={groups} />)
  })

  it("displays a header", () => {
    const header = groupindex.find("h3")
    expect(header.text()).toEqual("Groups To Check Out:")
  })

  it("displays a card", () => {
    const card = groupindex.find(Card)
    expect(card.length).toEqual(1)
  })
})
