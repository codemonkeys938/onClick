import React from "react"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import Post from "./Post"
import { Card } from "reactstrap"

Enzyme.configure({ adapter: new Adapter() })

const groups = [
  { name: "Tacos", description: "Something about tacos here", id: 1 }
]

const posts = [{ post_text: "test text", id: 1, group_id: 1 }]

const props = {
  updateGroupView: jest.fn(),
  groups: groups,
  posts: posts
}

describe("When Post renders", () => {
  let postindex
  beforeEach(() => {
    postindex = shallow(<Post {...props} />)
  })

  it("displays a header", () => {
    const header = postindex.find("h3")
    expect(header.text()).toEqual("Most Recent Posts:")
  })

  it("displays a Card", () => {
    const card = postindex.find(Card)
    expect(card.length).toEqual(1)
  })

  it("should invoke the openPostGroup method", () => {
    const card = postindex.find(Card)
    const mockFn = jest.fn()
    card.simulate("click", { onclick: mockFn })
    expect(props.updateGroupView).toHaveBeenCalled()
  })
})
