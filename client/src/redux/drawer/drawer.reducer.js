import { drawerActionType } from './drawer.action.type'

const initialState = {
  drawerOpen: {
    state: false,
    side: undefined,
  },
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case drawerActionType.SET_DRAWER_OPEN:
      return { ...state, drawerOpen: payload }

    default:
      return state
  }
}
