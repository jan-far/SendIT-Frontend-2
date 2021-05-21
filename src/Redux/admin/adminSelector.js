import { createSelector } from 'reselect';

const selectAdmin = (state) => state.admin;

export const selectCurrentAdmin = createSelector([selectAdmin], (admin) => admin.currentAdmin);

export const selectAdminAuthenticated = createSelector(
  [selectAdmin],
  (admin) => admin.adminAuthenticated
);

export const selectAllUserParcel = createSelector([selectAdmin], (admin) => admin.usersParcel);

export const selectAllUsersData = createSelector([selectAdmin], (admin) => admin.users);

export const selectAdminLoaded = createSelector([selectAdmin], (admin) => !admin.currentUser);

export const selectIsOpen = createSelector([selectAdmin], (admin) => admin.isOpen);

export const selectFetchingUsersInfo = createSelector(
  [selectAdmin],
  (admin) => admin.fetchingUsersInfo
);

export const selectSelectedParcel = createSelector([selectAdmin], (admin) => admin.selectedParcel);

export const selectLogout = createSelector([selectAdmin], (admin) => admin.logout);

export const selectEditParcel = createSelector([selectAdmin], (admin) => admin.editParcel);

export const selectShowParcel = createSelector([selectAdmin], (admin) => admin.showParcel);
