import { SET_POSTS } from '../../redux/types/actionTypes'
import postsReducer from '../../redux/reducers/postsReducer'
import { Post } from '../../redux/types/reducers'
import { SetPostsAction } from '../../redux/types/actions'

describe('Post Reducer Tests', () => {
  let initialState: Post[]
  beforeEach(() => {
    initialState = []
  })

  it('Should return added posts for GET_POSTS action type', () => {
    const posts: Post[] = [
      { id: 1, title: 'Title1', body: 'Body 1' },
      { id: 2, title: 'Title2', body: 'Body 2' },
      { id: 3, title: 'Title3', body: 'Body 3' }
    ]
    const setPostsAction: SetPostsAction = { type: SET_POSTS, payload: posts }
    const state = postsReducer(initialState, setPostsAction)
    expect(state).toEqual([...posts])
  })
})
