import React from 'react'
import Headline, { HeadlineProps } from '../../components/Headline'
import { shallow, ShallowWrapper } from 'enzyme'
import { fetchComponentByAttribute } from '../../utils'

const setUpHeadline = (props: HeadlineProps): ShallowWrapper =>
  shallow(<Headline {...props} />)

describe('Headline component tests', () => {
  let component: ShallowWrapper

  describe('Without Props', () => {
    beforeEach(() => {
      component = setUpHeadline({ description: '', header: '' })
    })

    it('Should not render', () => {
      const comp: ShallowWrapper = fetchComponentByAttribute(
        component,
        'headline'
      )
      expect(comp.length).toBe(0)
    })
  })

  describe('With props', () => {
    beforeEach(() => {
      component = setUpHeadline({ description: '', header: 'Hi there' })
    })

    it('Should render without errors', () => {
      const comp: ShallowWrapper = fetchComponentByAttribute(
        component,
        'headline'
      )
      expect(comp.length).toBe(1)
    })

    it('Should render a H1', () => {
      expect(
        fetchComponentByAttribute(component, 'headlineTitle')
      ).toHaveLength(1)
    })

    it('Should render a description', () => {
      expect(
        fetchComponentByAttribute(component, 'headlineDesc')
      ).toHaveLength(1)
    })
  })
})
