import React from 'react'
import { shallow } from 'enzyme'
import Header from '../components/Header'
import { LogoContainer } from '../styles/HeaderStyles'

describe('Header component tests', () => {
  it('Should render image container without errors', () => {
    const component = shallow(<Header />)
    const imageContainer = component.find(LogoContainer)
    expect(imageContainer.length).toBe(1)
  })

  it('Should render an SVG logo ', () => {
    
  })
})
