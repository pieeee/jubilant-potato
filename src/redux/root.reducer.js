import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import userReducer from './user/user.reducer'
import cartReducer from './cart/cart.reducer'
import drawerReducer from './drawer/drawer.reducer'


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
}

export const rootReducer = combineReducers({
  user: userReducer,
  drawer: drawerReducer,
  cart: cartReducer,
})

export default persistReducer(persistConfig, rootReducer)
