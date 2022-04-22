import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import AboutUs from './AboutUs'

Enzyme.configure({ adapter: new Adapter() })

describe("When AboutUs renders", () => {
  let about
  beforeEach(() => {
    about = shallow(<AboutUs />)
  })

  it("displays a header", () => {
    const header = about.find('h1')
    expect(header.text()).toEqual("About Us")
  })

  it("displays a card title", () => {
    const card = about.find('CardTitle')
    expect(card.length).toEqual(4)
  })

  it("displays a card subtitle", () => {
    const card = about.find('CardSubtitle')
    expect(card.length).toEqual(4)
  })

  it("displays a card image", () => {
    const card = about.find('CardImg')
    expect(card.length).toEqual(4)
  })


  it("displays a card text", () => {
    const card = about.find('CardText')
    expect(card.length).toEqual(4)
  })
})

