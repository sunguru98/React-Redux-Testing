import { Post } from '../types/reducers';
import { PostAction, SetPostsAction } from '../types/actions';
import { SET_POSTS, CLEAR_POSTS } from '../types/actionTypes';
import { Reducer } from 'redux';

const initialState: Post[] = [];

const postsReducer: Reducer<Post[], PostAction> = (
  state = initialState,
  action: PostAction
): Post[] => {
  const { type } = action;
  const { payload } = action as SetPostsAction;

  switch (type) {
    case CLEAR_POSTS:
      return [];
    case SET_POSTS:
      return [...state, ...payload];
    default:
      return state;
  }
};

export default postsReducer;
