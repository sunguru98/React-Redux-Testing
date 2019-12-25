import React from 'react'
import Header from './components/Header'
import Headline from './components/Headline'

const App: React.FC = () => {
  return (
    <div className='App'>
      <Header />
      <Headline header='All posts' description='Hi there' />
    </div>
  )
}

export default App
