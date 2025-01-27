import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  campers: [],
};

const slise = createSlice({
  name: 'campers',
  initialState,
  //   extraReducers: builder => {
  //     builder.addCase();
  //   },
});

export const campersReduser = slise.reducer;
