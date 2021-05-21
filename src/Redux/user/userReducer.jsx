import { userActionTypes } from './userTypes';

const initialState = {
  currentUser: null,
  isAuthenticated: true,
  fetchingUser: false,
  loadingSpinner: false,
  hover: false,
  scrollNav: false,
  openMenu: false,
  logout: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActionTypes.LOADING_SPINNER:
      return {
        ...state,
        loadingSpinner: action.payload,
      };

    case userActionTypes.FETCHING_CURRENT_USER_START:
      return {
        ...state,
        fetchingUser: true,
      };
    case userActionTypes.FETCHING_CURRENT_USER_SUCCESS:
      localStorage.setItem('user_data', JSON.stringify(action.payload));

      return {
        ...state,
        currentUser: action.payload,
        isAuthenticated: true,
        fetchingUser: false,
      };
    case userActionTypes.FETCHING_CURRENT_USER_FAILURE:
      return {
        ...state,
        currentUser: null,
        fetchingUser: false,
        isAuthenticated: false,
      };

    case userActionTypes.SET_CURRENT_USER_START:
      return {
        ...state,
        loadingSpinner: true,
      };
    case userActionTypes.SET_CURRENT_USER_SUCCESS:
      localStorage.setItem('user_data', JSON.stringify(action.payload));

      return {
        ...state,
        isAuthenticated: true,
        loadingSpinner: false,
        currentUser: action.payload,
      };
    case userActionTypes.SET_CURRENT_USER_FAILURE:
      return {
        ...state,
        loadingSpinner: false,
        isAuthenticated: false,
      };

    case userActionTypes.SET_SCROLL_NAV:
      return {
        ...state,
        scrollNav: action.payload,
      };
    case userActionTypes.TOGGLE_HOVER:
      return {
        ...state,
        hover: !state.hover,
      };
    case userActionTypes.TOGGLE_OPEN_MENU:
      return {
        ...state,
        openMenu: !state.openMenu,
      };
    case userActionTypes.TOGGLE_LOGOUT:
      return {
        ...state,
        logout: !state.logout,
      };
    case userActionTypes.LOGOUT:
      localStorage.removeItem('user_data');
      return {
        ...state,
        currentUser: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default userReducer;
