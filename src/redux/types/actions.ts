import { Post } from './reducers';
import { SET_POSTS, CLEAR_POSTS } from './actionTypes';
import { Action } from 'redux';

export interface SetPostsAction extends Action<typeof SET_POSTS> {
  payload: Post[];
}

export interface ClearPostsAction extends Action<typeof CLEAR_POSTS>{}

export type PostAction = SetPostsAction | ClearPostsAction;
export type AppActions = PostAction;
