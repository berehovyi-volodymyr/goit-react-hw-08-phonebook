import { createSlice } from '@reduxjs/toolkit';

import { getContacts, addContact, deleteContact } from './contacts-operation';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getContacts.pending, store => {
        store.isLoading = true;
        store.error = null;
      })
      .addCase(getContacts.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        store.items = payload;
      })
      .addCase(getContacts.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      })
      .addCase(addContact.pending, store => {
        store.isLoading = true;
        store.error = null;
      })
      .addCase(addContact.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        store.items.push(payload);
      })
      .addCase(addContact.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      })
      .addCase(deleteContact.pending, store => {
        store.isLoading = true;
        store.error = null;
      })
      .addCase(deleteContact.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        store.items = store.items.filter(item => item.id !== payload);
      })
      .addCase(deleteContact.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      });
  },
});

export default contactsSlice.reducer;
