import { ShallowWrapper } from 'enzyme'

export const fetchComponentByAttribute = (
  component: ShallowWrapper,
  attribute: string
) => component.find(`[data-test='${attribute}']`)


