import { createSelector } from 'reselect';

const selectParcel = (state) => state.parcel;

export const selectIsLoading = createSelector([selectParcel], (parcel) => parcel.isLoading);

export const selectUserParcel = createSelector([selectParcel], (parcel) => parcel.userParcel);

export const selectLoadingParcel = createSelector([selectParcel], parcel => !parcel.userParcel)

export const selectCreateParcel = createSelector([selectParcel], (parcel) => parcel.createParcel);

export const selectParcelSelected = createSelector([selectParcel], (parcel) => parcel.selectedParcel);

export const selectShowParcel = createSelector([selectParcel], (parcel) => parcel.showParcel);

export const selectEditParcel = createSelector([selectParcel], (parcel) => parcel.editParcel);
