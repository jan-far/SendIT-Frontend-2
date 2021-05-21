import { applyMiddleware, createStore } from 'redux';
import rootReducer from './Redux/root-reducer';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import thunkMiddleware from 'redux-thunk'

const middleware = [logger, thunkMiddleware];

export const store = createStore(rootReducer, applyMiddleware(...middleware));
export const persistor = persistStore(store);
