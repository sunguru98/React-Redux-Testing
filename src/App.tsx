import React from 'react'

// Components
import Header from './components/Header'
import Headline from './components/Headline'
import Button from './components/Button'

// Redux
import { connect, ConnectedProps } from 'react-redux'
import { getPosts } from './redux/actions/postActions'
import { RootState } from './redux/rootReducer'
import { ThunkDispatch } from 'redux-thunk'
import { AppActions } from './redux/types/actions'
import { bindActionCreators } from 'redux'
import PostList from './components/PostList'

interface Props extends ReduxProps {}

const App: React.FC<Props> = ({ getPosts, posts }) => {
  const handleClick = (): void => {
    getPosts()
  }

  return (
    <div className='App'>
      <Header />
      <Headline header='All posts' description='Hi there' />
      <Button onClick={handleClick}>Get Posts</Button>
      <PostList posts={posts} />
    </div>
  )
}

// Redux
const mapStateToProps = (state: RootState) => ({
  posts: state.posts
})

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>) => ({
  getPosts: bindActionCreators(getPosts, dispatch)
})

const connector = connect(mapStateToProps, mapDispatchToProps)
type ReduxProps = ConnectedProps<typeof connector>
export default connector(App)
