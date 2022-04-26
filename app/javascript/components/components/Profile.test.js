import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Profile from './Profile'
Enzyme.configure({ adapter: new Adapter() })

const current_user = jest.fn()
const props = {
  current_user
}

describe("When Profile renders", () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Profile {...props} />)
  })

  it("displays hi with username", () => {
    const header = wrapper.find('p')
    expect(header.text()).toContain('Hi, !')
  })
})

