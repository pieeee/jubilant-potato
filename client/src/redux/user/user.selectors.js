import { createSelector } from "reselect";

const selectUser = store => store.user

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
)