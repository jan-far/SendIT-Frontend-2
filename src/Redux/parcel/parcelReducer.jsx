import { parcelActionTypes } from './parcelTypes';

const initialState = {
  userParcel: [],
  isLoading: true,
  createParcel: false,
  selectedParcel: null,
  showParcel: false,
  editParcel: false,
};

const parcelReducer = (state = initialState, action) => {
  switch (action.type) {
    case parcelActionTypes.FETCHING_USER_PARCEL_START:
      return {
        ...state,
        isLoading: true,
      };
    case parcelActionTypes.FETCHING_USER_PARCEL_SUCCESS:
      return {
        ...state,
        userParcel: action.payload,
        isLoading: false,
      };
    case parcelActionTypes.FETCHING_USER_PARCEL_FAILURE:
      return {
        ...state,
        userParcel: state.userParcels,
        isLoading: false,
      };

    case parcelActionTypes.SET_USER_PARCEL:
      return {
        ...state,
        userParcel: action.payload,
        isLoading: false,
      };
    case parcelActionTypes.IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case parcelActionTypes.CREATE_PARCEL:
      return {
        ...state,
        createParcel: !state.createParcel,
      };
    case parcelActionTypes.SET_SELECTED_PARCEL:
      return {
        ...state,
        selectedParcel: action.payload,
      };
    case parcelActionTypes.SHOW_PARCEL:
      return {
        ...state,
        showParcel: !state.showParcel,
      };
    case parcelActionTypes.EDIT_PARCEL:
      return {
        ...state,
        editParcel: !state.editParcel,
      };
    default:
      return state;
  }
};

export default parcelReducer;
