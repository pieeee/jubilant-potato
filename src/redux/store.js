import { createStore, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { fetchCollectionsStart } from './shop/shop.sagas'
import { showFeedback } from './feedback/feedback.sagas'

import rootReducer from './root.reducer'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares))

sagaMiddleware.run(fetchCollectionsStart)
sagaMiddleware.run(showFeedback)

export const persistor = persistStore(store)
