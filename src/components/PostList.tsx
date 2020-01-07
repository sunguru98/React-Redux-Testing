import React from 'react'
import { Post } from '../redux/types/reducers'

interface PostListProps {
  posts: Post[]
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div>
      {posts.map((post: Post) => (
        <h1>hi, {post.title}</h1>
      ))}
    </div>
  )
}

export default PostList
