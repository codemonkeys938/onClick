import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import GroupIndex from './GroupIndex'
import { Card, CardTitle, CardText, CardGroup } from 'reactstrap'

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
    const header = groupindex.find('h1')
    expect(header.text()).toEqual("Group Index")
  })

  it("displays a card group", () => {
    const cardgroup = groupindex.find(CardGroup)
    expect(cardgroup.length).toEqual(1)
  })

  it("displays a card", () => {
    const card = groupindex.find(Card)
    expect(card.length).toEqual(1)
  })

  // it("displays a card title", () => {
  //   const title = groupindex.find(CardTitle)
  //   expect(title.length).toEqual(8)
  // })

  // it("displays a card text", () => {
  //   const text = about.find(CardText)
  //   expect(text.length).toEqual(2)
  // })


})

