import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'

import rootReducer from './root.reducer'


const middlewares = [logger]

const enhancer = composeWithDevTools(
  applyMiddleware(...middlewares)
  // other store enhancers if any
)

const store = createStore(rootReducer, enhancer)

export default store
