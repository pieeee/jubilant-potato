import { combineReducers } from 'redux'

import userReducer from './user/user.reducer'
import drawerReducer from './drawer/drawer.reducer'

export default combineReducers({
  user: userReducer,
  drawer: drawerReducer,
})
