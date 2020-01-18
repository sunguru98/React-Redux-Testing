import React from 'react';
import Button, { ButtonProps } from '../../components/Button';
import { shallow, ShallowWrapper } from 'enzyme';
import { fetchComponentByAttribute } from '../../utils/index';

const setUpButton = (props: ButtonProps): ShallowWrapper =>
  shallow<React.Component<ButtonProps>>(<Button {...props} />);

describe('Button component tests', () => {
  let component: ShallowWrapper;
  beforeEach(() => {
    component = setUpButton({ onClick: () => {}, children: 'Hi' });
  });

  it('Should render the button itself', () => {
    const wrapper = fetchComponentByAttribute(component, 'button');
    expect(wrapper).toHaveLength(1);
  });
});
