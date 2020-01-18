import moxios from 'moxios';
import { Post } from '../../redux/types/reducers';
import { getPosts } from '../../redux/actions/postActions';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../../redux/rootReducer';
import { AppActions } from '../../redux/types/actions';
import { storeGenerator } from '../../redux/store';
import { Store } from 'redux';

describe('Fetch Posts Tests', () => {
  let store: Store<RootState, AppActions> & {
    dispatch: ThunkDispatch<RootState, null, AppActions>;
  };
  beforeAll(() => {
    store = storeGenerator();
  });

  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test('The posts state is updated correctly', async () => {
    const expectedState: Post[] = [
      {
        id: 1,
        title: 'Title 1',
        body: 'Body 1'
      },
      {
        id: 2,
        title: 'Title 2',
        body: 'Body 2'
      },
      {
        id: 3,
        title: 'Title 3',
        body: 'Body 3'
      },
      {
        id: 4,
        title: 'Title 4',
        body: 'Body 4'
      }
    ];

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState
      });
    });

    await store.dispatch(getPosts());

    const newState = store.getState();
    expect(newState.posts).toEqual(expectedState);
  });
});
