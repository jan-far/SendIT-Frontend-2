import { getParcel } from '../../Services/dataServices';
import { parcelActionTypes } from './parcelTypes';

export const fetchUserParcelStart = () => ({
  type: parcelActionTypes.FETCHING_USER_PARCEL_START,
});

export const fetchUserParcelSuccess = (parcel) => ({
  type: parcelActionTypes.FETCHING_USER_PARCEL_SUCCESS,
  payload: parcel,
});

export const fetchUserParcelFailure = () => ({
  type: parcelActionTypes.FETCHING_USER_PARCEL_FAILURE,
});

export const fetchUserParcelAsync = () => {
  return async (dispatch) => {
    dispatch(fetchUserParcelStart());
    try {
      const parcelReq = await getParcel();
      if (parcelReq.success) {
        dispatch(fetchUserParcelSuccess(parcelReq.userParcel));
      } else {
        dispatch(fetchUserParcelFailure());
      }
    } catch (error) {
      console.log(error);
    }
  };
};


export const setUserParcel = (parcel) => ({
  type: parcelActionTypes.SET_USER_PARCEL,
  payload: parcel,
});

export const setIsLoading = (loading) => ({
  type: parcelActionTypes.IS_LOADING,
  payload: loading
});

export const setCreateParcel = () => ({
  type: parcelActionTypes.CREATE_PARCEL,
});

export const setSelectedParcel = (selectedParcel) => ({
  type: parcelActionTypes.SET_SELECTED_PARCEL,
  payload: selectedParcel,
});

export const setShowParcel = () => ({
  type: parcelActionTypes.SHOW_PARCEL,
});

export const setEditParcel = () => ({
  type: parcelActionTypes.EDIT_PARCEL,
});
