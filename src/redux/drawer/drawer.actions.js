import { drawerActionType } from './drawer.action.type'

export const setDrawerOpen = (open) => ({
  type: drawerActionType.SET_DRAWER_OPEN,
  payload: open,
})