import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import { fetchComponentByAttribute } from './utils';
import { storeGenerator } from './redux/store';
import { SET_POSTS } from './redux/types/actionTypes';
import { SetPostsAction } from './redux/types/actions';

const store = storeGenerator();
describe('App component Tests', () => {
  let component;
  beforeEach(() => {
    component = shallow(<App store={store} />)
      .childAt(0)
      .dive();

    store.dispatch<SetPostsAction>({
      type: SET_POSTS,
      payload: [{ id: 1, title: 'Some title 1', body: 'Some body 1' }]
    });
  });

  it('Should render without any errors', () => {
    component = fetchComponentByAttribute(component, 'appComponent');
    expect(component).toHaveLength(1);
  });
});
