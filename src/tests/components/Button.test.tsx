import React from 'react';
import Button, { ButtonProps } from '../../components/Button';
import { shallow, ShallowWrapper } from 'enzyme';
import { fetchComponentByAttribute } from '../../utils/index';

describe('Button component tests', () => {
  let component: ShallowWrapper<ButtonProps, null>;

  beforeEach(() => {
    component = shallow(<Button onClick={() => {}}>Hello</Button>) as ShallowWrapper<ButtonProps, null>;
  });

  it('Should render the button itself', () => {
    const wrapper = fetchComponentByAttribute(component, 'button');
    expect(wrapper).toHaveLength(1);
  });
});
