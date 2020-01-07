import { Post } from '../types/reducers';
import { PostAction } from '../types/actions';
import { SET_POSTS } from '../types/actionTypes';

const initialState: Post[] = [];

const postsReducer = (state = initialState, action: PostAction): Post[] => {
  const { type, payload } = action;

  switch (type) {
    case SET_POSTS:
      return [...state, ...payload];
    default:
      return state;
  }
};

export default postsReducer;
