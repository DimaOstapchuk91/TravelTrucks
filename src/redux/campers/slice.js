import { createSlice } from '@reduxjs/toolkit';
import { getCampers } from './operations.js';

const initialState = {
  campers: [],
  total: 0,
  loading: false,
  error: false,
};

const campersSlice = createSlice({
  name: 'campers',
  initialState,
  extraReducers: builder => {
    builder.addCase(getCampers.fulfilled, (state, action) => {
      state.campers = action.payload.items;
      state.total = action.payload.total;
    });
  },
});

export const campersReduser = campersSlice.reducer;
