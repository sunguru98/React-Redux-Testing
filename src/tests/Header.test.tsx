import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import Header from '../components/Header'
import { fetchComponentByAttribute } from '../utils/index'

const setUpHeader = (props: object = {}): ShallowWrapper =>
  shallow(<Header {...props} />)

describe('Header component tests', () => {
  let component: ShallowWrapper

  beforeEach(() => {
    component = setUpHeader()
  })

  it('Should render image container without errors', () => {
    const imageLogoContainer = fetchComponentByAttribute(
      component,
      'logoContainer'
    )
    expect(imageLogoContainer).toHaveLength(1)
  })

  it('Should render an SVG logo ', () => {
    const headerLogo = fetchComponentByAttribute(component, 'headerLogo')
    expect(headerLogo).toHaveLength(1)
  })
})
