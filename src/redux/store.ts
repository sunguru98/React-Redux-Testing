import { createStore, applyMiddleware } from 'redux'
import rootReducer, { RootState } from './rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk, { ThunkMiddleware } from 'redux-thunk'
import { AppActions } from './types/actions'

const middlewares = [thunk as ThunkMiddleware<RootState, AppActions>]

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
)
export default store
