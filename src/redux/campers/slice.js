import { createSlice } from '@reduxjs/toolkit';
import { getCamperById, getCampers } from './operations.js';

const initialState = {
  campers: [],
  total: 0,
  page: 1,
  params: '',
  oneCamper: {},
  userFilter: { location: '', vehicleEquipment: [], vehicleType: '' },
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
    setFilters: (state, action) => {
      state.userFilter = action.payload;
    },
    resetState: () => initialState,
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
        state.isLoading = false;
      })
      .addCase(getCamperById.pending, state => {
        state.error = false;
        state.isLoading = true;
      })
      .addCase(getCamperById.rejected, state => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export const { incrementPage, setParams, setFilters, resetState } =
  campersSlice.actions;
export const campersReduser = campersSlice.reducer;
