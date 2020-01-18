import React from 'react';
import { Post } from '../redux/types/reducers';
import PostListItem from './PostListItem';

interface PostListProps {
  posts: Post[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div>
      {posts.map((post: Post) => (
        <PostListItem post={post} key={post.id} />
      ))}
    </div>
  );
};

export default PostList;
