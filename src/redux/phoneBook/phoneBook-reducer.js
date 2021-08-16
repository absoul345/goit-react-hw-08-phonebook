import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { authActions } from '../auth';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  changeFilter,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
} from './phoneBook-actions';

// const initialUserState = { filter: '', items: [] };

const items = createReducer([], {
  [fetchContactSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [authActions.logoutSuccess]: () => [],
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
  [authActions.logoutSuccess]: () => '',
});

const loading = createReducer(false, {
  [fetchContactRequest]: () => true,
  [fetchContactSuccess]: () => false,
  [fetchContactError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

const error = createReducer(null, {
  [addContactError]: (_, { payload }) => payload,
  [addContactRequest]: () => null,
  [deleteContactError]: (_, { payload }) => payload,
  [deleteContactRequest]: () => null,
  [fetchContactError]: (_, { payload }) => payload,
  [fetchContactRequest]: () => null,
});

export default combineReducers({
  items,
  filter,
  loading,
  error,
});
