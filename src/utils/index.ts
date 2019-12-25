import { ShallowWrapper } from 'enzyme'

export const fetchComponentByAttribute = (
  component: ShallowWrapper,
  attribute: string
) => {
  const foundComponent = component.find(`[data-test='${attribute}']`)
  return foundComponent
}
