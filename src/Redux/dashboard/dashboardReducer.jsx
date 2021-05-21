import { dashboardActionTypes } from "./dashboardTypes";

const initialState = {
  showProfile: false,
  isOpen: false,
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case dashboardActionTypes.TOGGLE_SHOW_PROFILE:
      return {
        ...state,
        showProfile: !state.showProfile,
      };
    case dashboardActionTypes.TOGGLE_OPEN:
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    default:
      return state;
  }
};

export default dashboardReducer;
