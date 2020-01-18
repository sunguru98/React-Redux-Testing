import Axios from 'axios';
import { SetPostsAction, ClearPostsAction, PostAction } from '../types/actions';
import { Post } from '../types/reducers';
import { SET_POSTS, CLEAR_POSTS } from '../types/actionTypes';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../rootReducer';
import { ActionCreator, Dispatch } from 'redux';

export const getPosts: ActionCreator<ThunkAction<
  Promise<Post[] | undefined>,
  RootState,
  null,
  PostAction
>> = () => async (dispatch: Dispatch<PostAction>): Promise<Post[] | undefined> => {
  try {
    dispatch<ClearPostsAction>({ type: CLEAR_POSTS });
    const { data } = await Axios.get<Post[]>(
      'https://jsonplaceholder.typicode.com/posts?_limit=10'
    );
    dispatch<SetPostsAction>({ type: SET_POSTS, payload: data });
    return data;
  } catch (err) {
    console.log(err.message);
    return undefined;
  }
};
