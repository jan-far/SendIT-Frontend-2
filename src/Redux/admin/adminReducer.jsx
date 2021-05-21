import { adminActionTypes } from './adminTypes';

const initialState = {
  currentAdmin: null,
  adminAuthenticated: true,
  fetchingUsersInfo: false,
  loadingSpinner: false,
  usersParcel: [],
  users: [],
  isOpen: false,
  selectedParcel: null,
  showParcel: false,
  editParcel: false,
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case adminActionTypes.LOADING_SPINNER:
      return {
        ...state,
        loadingSpinner: action.payload,
      };

    case adminActionTypes.FETCHING_ALL_USERS_PARCEL_ADMIN_START:
      return {
        ...state,
        fetchingUsersInfo: true,
      };
    case adminActionTypes.FETCHING_ALL_USERS_PARCEL_ADMIN_SUCCESS:
      return {
        ...state,
        usersParcel: action.payload,
        fetchingUsersInfo: false,
      };
    case adminActionTypes.FETCHING_ALL_USERS_PARCEL_ADMIN_FAILURE:
      return {
        ...state,
        currentAdmin: null,
        fetchingUsersInfo: false,
      };

    case adminActionTypes.FETCHING_ALL_USERS_DATA_START:
      return {
        ...state,
        fetchingUsersInfo: true,
      };
    case adminActionTypes.FETCHING_ALL_USERS_DATA_SUCCESS:
      return {
        ...state,
        users: action.payload,
        fetchingUsersInfo: false,
      };
    case adminActionTypes.FETCHING_ALL_USERS_DATA_FAILURE:
      return {
        ...state,
        users: [],
        fetchingUsersInfo: false,
      };

    case adminActionTypes.SET_CURRENT_ADMIN_START:
      return {
        ...state,
        loadingSpinner: true,
      };
    case adminActionTypes.SET_CURRENT_ADMIN_SUCCESS:
      localStorage.setItem('admin_data', JSON.stringify(action.payload));

      return {
        ...state,
        adminAuthenticated: true,
        loadingSpinner: false,
        currentAdmin: action.payload,
      };
    case adminActionTypes.SET_CURRENT_ADMIN_FAILURE:
      return {
        ...state,
        loadingSpinner: false,
        adminAuthenticated: false,
      };

    case adminActionTypes.TOGGLE_OPEN:
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    case adminActionTypes.SET_SELECTED_PARCEL:
      return {
        ...state,
        selectedParcel: action.payload,
      };
    case adminActionTypes.SHOW_PARCEL:
      return {
        ...state,
        showParcel: !state.showParcel,
      };
    case adminActionTypes.EDIT_PARCEL:
      return {
        ...state,
        editParcel: !state.editParcel,
      };
    case adminActionTypes.ADMIN_LOGOUT:
      localStorage.removeItem('admin_data');
      return {
        ...state,
        currentAdmin: null,
        adminAuthenticated: false,
      };
    default:
      return state;
  }
};

export default adminReducer;
