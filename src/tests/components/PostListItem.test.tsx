import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import PostListItem, { PostListItemProps } from '../../components/PostListItem';
import { fetchComponentByAttribute } from '../../utils';

describe('Post List Item Tests', () => {
  describe('With Props', () => {
    let component: ShallowWrapper<PostListItemProps, null>;
    beforeEach(() => {
      component = shallow(
        <PostListItem
          post={{
            title: 'Some title',
            body: 'Some body',
            id: 1
          }}
        />
      ) as ShallowWrapper<PostListItemProps, null>;
    });

    it('Should render a Post List Item', () => {
      const wrapper = fetchComponentByAttribute(component, 'postListItem');
      expect(wrapper).toHaveLength(1);
    });

    it('Should render a title', () => {
      const title = fetchComponentByAttribute(component, 'postListItemTitle');
      expect(title).toHaveLength(1);
    });

    it('Should render the Post body', () => {
      const body = fetchComponentByAttribute(component, 'postListItemBody');
      expect(body).toHaveLength(1);
    });
  });

  describe('Without Props', () => {
    let component: ShallowWrapper<PostListItemProps>;
    beforeEach(() => {
      component = shallow(
        <PostListItem post={{ id: 1, title: '', body: '' }} />
      ) as ShallowWrapper<PostListItemProps>;
    });

    it('Should not render a Post List Item', () => {
      const wrapper = fetchComponentByAttribute(component, 'postListItem');
      expect(wrapper).toHaveLength(0);
    });

    it('Should not render a title', () => {
      const title = fetchComponentByAttribute(component, 'postListItemTitle');
      expect(title).toHaveLength(0);
    });

    it('Should not render the Post body', () => {
      const body = fetchComponentByAttribute(component, 'postListItemBody');
      expect(body).toHaveLength(0);
    });
  });
});
