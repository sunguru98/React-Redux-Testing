import actionTypes from '../actionTypes'
import { ReduxAction, Post } from '../utils/interfaces'

const { GET_POSTS } = actionTypes

export default (state: Post[] = [], action: ReduxAction) => {
  const { type, payload } = action
  switch (type) {
    case GET_POSTS:
      return [...state, ...payload]
    default:
      return state
  }
}
