import {} from '../actionTypes'
import { ReduxAction, Post } from '../utils/interfaces'

export default (state: Post[] = [], action: ReduxAction) => {
  const { type } = action
  switch (type) {
    default:
      return state
  }
}
