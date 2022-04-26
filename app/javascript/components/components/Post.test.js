import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Post from './Post'
import { Card, CardGroup } from 'reactstrap'

Enzyme.configure({ adapter: new Adapter() })

const posts = [
  { post_text: "test text", id: 1 }
]

describe("When Post renders", () => {
  let postindex
  beforeEach(() => {
    postindex = shallow(<Post posts={posts} />)
  })

  it("displays a header", () => {
    const header = postindex.find('h1')
    expect(header.text()).toEqual("Post Index")
  })

  it("displays a CardGroup", () => {
    const group = postindex.find(CardGroup)
    expect(group.length).toEqual(1)
  })

  it("displays a Card", () => {
    const card = postindex.find(Card)
    expect(card.length).toEqual(1)
  })

})