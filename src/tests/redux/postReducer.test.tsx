import actionTypes from '../../redux/actionTypes'
import postsReducer from '../../redux/reducers/postsReducer'
import { ReduxAction, Post } from '../../redux/utils/interfaces'

const { GET_POSTS } = actionTypes

describe('Post Reducer Tests', () => {
  let initialState: Post[]
  beforeEach(() => {
    initialState = []
  })

  it('Should return empty state for non matching action types', () => {
    const action: ReduxAction = { type: 'SOME_ACTION' }
    const state = postsReducer(initialState, action)
    expect(state).toEqual([])
  })

  it('Should return added posts for GET_POSTS action type', () => {
    const posts: Post[] = [
      { title: 'Title1', body: 'Body 1' },
      { title: 'Title2', body: 'Body 2' },
      { title: 'Title3', body: 'Body 3' }
    ]
    const action: ReduxAction = { type: GET_POSTS, payload: [...posts] }
    const state = postsReducer(initialState, action)
    expect(state).toEqual([...posts])
  })
})
