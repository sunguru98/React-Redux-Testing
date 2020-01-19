import React from 'react';
import Button, { ButtonProps } from '../../components/Button';
import { shallow, ShallowWrapper } from 'enzyme';
import { fetchComponentByAttribute } from '../../utils/index';

describe('Button component tests', () => {
  let component: ShallowWrapper<ButtonProps, null>;
  let onClick: jest.Mock<void, []>;
  beforeEach(() => {
    onClick = jest.fn()
    component = shallow(<Button onClick={onClick}>Hello</Button>) as ShallowWrapper<ButtonProps, null>;
  });

  it('Should render the button itself', () => {
    const wrapper = fetchComponentByAttribute(component, 'button');
    expect(wrapper).toHaveLength(1);
  });

  it('Should perform a dummy click', () => {
    const wrapper = fetchComponentByAttribute(component, 'button');
    wrapper.simulate('click')
    const callbackFunction = onClick.mock.calls
    expect(callbackFunction).toHaveLength(1)
  })
});
