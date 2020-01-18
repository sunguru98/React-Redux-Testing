import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import PostListItem, { PostListItemProps } from '../../components/PostListItem';
import { fetchComponentByAttribute } from '../../utils';

const selectPostListItem = (props: PostListItemProps) =>
  shallow<React.Component<PostListItemProps>>(<PostListItem {...props} />);

describe('Post List Item Tests', () => {
  describe('With Props', () => {
    let component: ShallowWrapper<PostListItemProps>;
    beforeEach(() => {
      component = selectPostListItem({
        post: {
          title: 'Some title',
          body: 'Some body',
          id: 1
        }
      });
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
      component = selectPostListItem({
        post: {
          title: '',
          body: '',
          id: 1
        }
      });
    });

    it('Should render a Post List Item', () => {
      const wrapper = fetchComponentByAttribute(component, 'postListItem');
      expect(wrapper).toHaveLength(0);
    });

    it('Should render a title', () => {
      const title = fetchComponentByAttribute(component, 'postListItemTitle');
      expect(title).toHaveLength(0);
    });

    it('Should render the Post body', () => {
      const body = fetchComponentByAttribute(component, 'postListItemBody');
      expect(body).toHaveLength(0);
    });
  });
});
