import { createSelector } from 'reselect';

const selectDashboard = (state) => state.dashboard;

export const selectShowProfile = createSelector(
  [selectDashboard],
  (dashboard) => dashboard.showProfile
);

export const selectIsOpen = createSelector(
  [selectDashboard],
  (dashboard) => dashboard.isOpen
);
