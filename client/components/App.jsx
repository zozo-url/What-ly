import React from 'react'

import ErrorMessage from './ErrorMessage'
import Header from './Header'

const App = () => (
  <div className='app'>
    <Header />
    <ErrorMessage />
    <h2>Upload placeholder goes here.</h2>
    {/* <LoadSubreddit>
      <WaitIndicator />
    </LoadSubreddit>
    <SubredditList /> */}
  </div>
)

export default App
