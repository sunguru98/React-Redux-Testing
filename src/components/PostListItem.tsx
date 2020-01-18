import React from 'react';
import { Post } from '../redux/types/reducers';

export interface PostListItemProps {
  post: Post;
}

const PostListItem: React.FC<PostListItemProps> = ({
  post: { title, body }
}) => {
  return title && body ? (
    <div data-test='postListItem'>
      <h1 data-test='postListItemTitle'>{title}</h1>
      <p data-test='postListItemBody'>{body}</p>
    </div>
  ) : null;
};

export default PostListItem;
