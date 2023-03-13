import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contacts/contacts-slice';
import filterReducer from './filter/filter-slice';
import authReducer from './auth/auth-slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});
