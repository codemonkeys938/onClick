// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import AboutUs from './AboutUs'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
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

