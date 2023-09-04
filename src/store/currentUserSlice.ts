import { RootState } from './store';
import { User } from '../models/user';
import { createSlice } from '@reduxjs/toolkit';

interface CurrentUser {
  userData?: User;
  theme: 'light' | 'dark';
}

const initialState: CurrentUser = {
  userData: undefined,
  theme: 'light',
};

export const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    loadUser: (state) => {
      state.userData = { id: 3, email: 'sample@mail.com', fullName: 'John Doe' };
    },
    logOut: (state) => {
      state.userData = undefined;
    },
  },
});

export const { loadUser, logOut } = currentUserSlice.actions;

export const selectCurrentUser = (state: RootState) => state.currentUser.userData;

export const currentUserReducer = currentUserSlice.reducer;
