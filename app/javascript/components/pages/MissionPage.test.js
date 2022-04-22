// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import MissionPage from './MissionPage'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({ adapter: new Adapter() })

describe("When MissionPage renders", () => {
  let mission
  beforeEach(() => {
    mission = shallow(<MissionPage />)
  })

  it("displays a header", () => {
    const header = mission.find('h1')
    expect(header.text()).toEqual("Our Mission")
  })

  it("displays a p tag", () => {
    const paragraph = mission.find('p')
    expect(paragraph.length).toEqual(1)
  })
})

