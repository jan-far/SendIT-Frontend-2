import { getAllByAdmin, postAdmin, verifyAdmin } from '../../Services/authService';
import { adminActionTypes } from './adminTypes';

export const fetchAllUsersParcelStart = () => ({
  type: adminActionTypes.FETCHING_ALL_USERS_PARCEL_ADMIN_START,
});

export const fetchAllUsersParcelSuccess = (parcels) => ({
  type: adminActionTypes.FETCHING_ALL_USERS_PARCEL_ADMIN_SUCCESS,
  payload: parcels,
});

export const fetchAllUsersParcelFailure = () => ({
  type: adminActionTypes.FETCHING_ALL_USERS_PARCEL_ADMIN_FAILURE,
});

export const fetchUsersParcelAsync = () => {
  return async (dispatch) => {
    dispatch(fetchAllUsersParcelStart());
    try {
      const req = await getAllByAdmin('/admin/parcels');

      if (req.success) {
        return dispatch(fetchAllUsersParcelSuccess(req.data));
      } else {
        dispatch(fetchAllUsersParcelFailure());
        return { message: req.message };
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
};

export const fetchAllUsersDataStart = () => ({
  type: adminActionTypes.FETCHING_ALL_USERS_DATA_START,
});

export const fetchAllUsersDataSuccess = (users) => ({
  type: adminActionTypes.FETCHING_ALL_USERS_DATA_SUCCESS,
  payload: users,
});

export const fetchAllUsersDataFailure = () => ({
  type: adminActionTypes.FETCHING_ALL_USERS_DATA_FAILURE,
});

export const fetchUsersDataAsync = () => {
  return async (dispatch) => {
    dispatch(fetchAllUsersDataStart());
    try {
      const req = await getAllByAdmin('/admin/users');

      if (req.success) {
        return dispatch(fetchAllUsersDataSuccess(req.data));
      } else {
        dispatch(fetchAllUsersDataFailure());
        return { message: req.message };
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
};

export const setCurrentAdminStart = () => ({
  type: adminActionTypes.SET_CURRENT_ADMIN_START,
});

export const setCurrentAdminSuccess = (admin) => ({
  type: adminActionTypes.SET_CURRENT_ADMIN_SUCCESS,
  payload: admin,
});

export const setCurrentAdminFailure = () => ({
  type: adminActionTypes.SET_CURRENT_ADMIN_FAILURE,
});

export const setCurrentAdminAsync = (data, route) => {
  return async (dispatch) => {
    dispatch(setCurrentAdminStart());
    try {
      const req = await postAdmin(data, route);

      if (req.success) {
        dispatch(setCurrentAdminSuccess(req.admin));
        return { success: true, message: req.message };
      } else {
        dispatch(setCurrentAdminFailure());
        return {
          success: false,
          message: req.message || 'Authentication failed! Please, Try again!',
        };
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const setAdminIfExist = () => {
  return async (dispatch) => {
    dispatch(setCurrentAdminStart());
    try {
      const req = await verifyAdmin();

      if (req.success) {
        dispatch(setCurrentAdminSuccess(req.admin));
        return { success: true, message: req.message };
      } else {
        dispatch(setCurrentAdminFailure());
        dispatch(adminLogout())
        return {
          success: false,
          message: req.message || 'Authentication failed! Please, Try again!',
        };
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const toggleOpen = () => ({
  type: adminActionTypes.TOGGLE_OPEN,
});

export const setIsLoading = (loading) => ({
  type: adminActionTypes.IS_LOADING,
  payload: loading,
});

export const setSelectedParcel = (selectedParcel) => ({
  type: adminActionTypes.SET_SELECTED_PARCEL,
  payload: selectedParcel,
});
export const setShowParcel = () => ({
  type: adminActionTypes.SHOW_PARCEL,
});

export const setEditParcel = () => ({
  type: adminActionTypes.EDIT_PARCEL,
});

export const adminLogout = () => ({
  type: adminActionTypes.ADMIN_LOGOUT,
});