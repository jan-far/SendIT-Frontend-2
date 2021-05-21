import { combineReducers } from 'redux';
import dashboardReducer from './dashboard/dashboardReducer';
import userReducer from './user/userReducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import parcelReducer from './parcel/parcelReducer';
import adminReducer from './admin/adminReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['parcel'],
};

const rootReducer = combineReducers({
  user: userReducer,
  dashboard: dashboardReducer,
  parcel: parcelReducer,
  admin: adminReducer,
});

export default persistReducer(persistConfig, rootReducer);
// export default rootReducer
