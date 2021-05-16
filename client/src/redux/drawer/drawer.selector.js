import { createSelector } from 'reselect'

const selectDrawer = (state) => state.drawer

export const selectDrawerOpen = createSelector(
  [selectDrawer],
  (drawer) => drawer.drawerOpen
)
