import Axios from 'axios'
import { Dispatch } from 'redux'
import { AppActions, SetPostsAction } from '../types/actions'
import { Post } from '../types/reducers'
import { SET_POSTS } from '../types/actionTypes'

export const getPosts = () => async (dispatch: Dispatch<AppActions>) => {
  try {
    const posts: Post[] = await Axios.get(
      'https://jsonplaceholder.com/posts?limit=10'
    )
    dispatch<SetPostsAction>({ type: SET_POSTS, payload: posts })
  } catch (err) {
    console.log(err.message)
  }
}
