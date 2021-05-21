import { postUser, verifyUser } from '../../Services/authService';
import { userActionTypes } from './userTypes';

export const setLoadingSpinner = (loading) => ({
  type: userActionTypes.LOADING_SPINNER,
  payload: loading,
});

export const fetchUserStart = () => ({
  type: userActionTypes.FETCHING_CURRENT_USER_START,
});

export const fetchUserSuccess = (user) => ({
  type: userActionTypes.FETCHING_CURRENT_USER_SUCCESS,
  payload: user,
});

export const fetchUserFailure = () => ({
  type: userActionTypes.FETCHING_CURRENT_USER_FAILURE,
});

export const fetchCurrentUserAsync = () => {
  return async (dispatch) => {
    dispatch(fetchUserStart());
    try {
      const req = await verifyUser();

      if (req.success) {
        return dispatch(fetchUserSuccess(req.user));
      } else {
        dispatch(fetchUserFailure());
        dispatch(logout());
        return { message: req.message };
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const setCurrentUserStart = () => ({
  type: userActionTypes.SET_CURRENT_USER_START,
});

export const setCurrentUserSuccess = (user) => ({
  type: userActionTypes.SET_CURRENT_USER_SUCCESS,
  payload: user,
});

export const setCurrentUserFailure = () => ({
  type: userActionTypes.SET_CURRENT_USER_FAILURE,
});

export const setCurrentUserAsync = (data, route) => {
  return async (dispatch) => {
    dispatch(setCurrentUserStart());
    try {
      const req = await postUser(data, route);

      if (req.success) {
        dispatch(setCurrentUserSuccess(req.user));
        return { success: true, message: req.message };
      } else {
        dispatch(setCurrentUserFailure());
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

export const setScrollNav = (scroll) => ({
  type: userActionTypes.SET_SCROLL_NAV,
  payload: scroll
})

export const toggleHover = () => ({
  type: userActionTypes.TOGGLE_HOVER,
});

export const toggleOpenMenu = () => ({
  type: userActionTypes.TOGGLE_OPEN_MENU,
});

export const toggleLogout = () => ({
  type: userActionTypes.TOGGLE_LOGOUT,
});

export const logout = () => ({
  type: userActionTypes.LOGOUT,
});
