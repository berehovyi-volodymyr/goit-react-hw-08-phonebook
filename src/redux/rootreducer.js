import { combineReducers } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contacts-slice';
import filterReducer from './filter/filter-slice';
import authReducer from './auth/auth-slice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({
  auth: persistedAuthReducer,
  contacts: contactsReducer,
  filter: filterReducer,
});

export default rootReducer;
