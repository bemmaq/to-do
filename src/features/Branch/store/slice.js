import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUsers } from './actions';




const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    isLoading: false,
    error: '',
  },
  extraReducers: builder => {
    builder
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        state.users = payload;
        state.isLoading = false;
      })
      .addCase(getUsers.pending, state => {
        state.isLoading = true;
      })
      .addCase(getUsers.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export default userSlice.reducer;
