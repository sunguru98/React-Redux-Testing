import { createStore, applyMiddleware, Store } from 'redux';
import rootReducer, { RootState } from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk, { ThunkMiddleware, ThunkDispatch } from 'redux-thunk';
import { AppActions } from './types/actions';

const middlewares = [thunk as ThunkMiddleware<RootState, AppActions>];

export const storeGenerator = (): Store<RootState, AppActions> & {
  dispatch: ThunkDispatch<RootState, null, AppActions>;
} =>
  createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middlewares))
  );
const store = storeGenerator();

export default store;
