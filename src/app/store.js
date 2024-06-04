import { configureStore } from '@reduxjs/toolkit';
import userSlice from './../features/Branch/store/slice';

export const store = configureStore({
  reducer: {
    users: userSlice,
  },
});
