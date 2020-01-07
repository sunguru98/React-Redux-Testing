import { Post } from './reducers';
import { SET_POSTS } from './actionTypes';

export interface SetPostsAction {
  type: typeof SET_POSTS;
  payload: Post[];
}

export type PostAction = SetPostsAction;
export type AppActions = PostAction;
