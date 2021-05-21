import { createSelector } from 'reselect';

const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector([selectUser], (user) => user.currentUser);

export const selectFetchingUser = createSelector([selectUser], (user) => user.fetchingUser);

export const selectUserLoaded = createSelector([selectUser], (user) => !user.currentUser);

export const selectOpenMenu = createSelector([selectUser], (user) => user.openMenu);

export const selectAuthenticated = createSelector([selectUser], (user) => user.isAuthenticated);

export const selectLoadingSpinner = createSelector([selectUser], (user) => user.loadingSpinner);

export const selectHover = createSelector([selectUser], (user) => user.hover);

export const selectScroll = createSelector([selectUser], (user) => user.scrollNav);

export const selectLogout = createSelector([selectUser], (user) => user.logout);
