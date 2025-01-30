import { createSlice } from '@reduxjs/toolkit';
import { getCamperById, getCampers } from './operations.js';

const initialState = {
  campers: [],
  total: 0,
  page: 1,
  params: '',
  oneCamper: {},
  isLoading: false,
  error: false,
};

const campersSlice = createSlice({
  name: 'campers',
  initialState,
  reducers: {
    incrementPage: state => {
      state.page += 1;
    },
    setParams: (state, action) => {
      state.page = initialState.page;
      state.params = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getCampers.pending, state => {
        state.error = false;
        state.isLoading = true;
      })
      .addCase(getCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        if (state.page > 1) {
          state.campers = [...state.campers, ...action.payload.items];
        } else {
          state.campers = action.payload.items;
        }

        state.total = action.payload.total;
      })
      .addCase(getCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.campers = initialState.campers;
        state.error = action.payload;
      })
      .addCase(getCamperById.fulfilled, (state, action) => {
        state.oneCamper = action.payload;
      })
      .addCase(getCamperById.pending, state => {
        state.error = false;
        state.isLoading = true;
      })
      .addCase(getCamperById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { incrementPage, setParams } = campersSlice.actions;
export const campersReduser = campersSlice.reducer;
