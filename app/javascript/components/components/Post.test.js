import React from "react"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import Post from "./Post"
import { Card } from "reactstrap"

Enzyme.configure({ adapter: new Adapter() })

const posts = [{ post_text: "test text", id: 1 }]

describe("When Post renders", () => {
  let postindex
  beforeEach(() => {
    postindex = shallow(<Post posts={posts} />)
  })

  it("displays a header", () => {
    const header = postindex.find("h3")
    expect(header.text()).toEqual("Most Recent Posts:")
  })

  it("displays a Card", () => {
    const card = postindex.find(Card)
    expect(card.length).toEqual(1)
  })
})
