import { ShallowWrapper } from 'enzyme'

export const fetchComponentByAttribute = <P, S>(
  component: ShallowWrapper<P, S>,
  attribute: string
) => component.find(`[data-test='${attribute}']`)


