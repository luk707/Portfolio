import React from 'react'
import { Provider } from 'react-redux'
import createStore from './src/create-store'

export default browser => ({ element }) => {
  const store = createStore(browser)
  return <Provider store={store}>{element}</Provider>
}
