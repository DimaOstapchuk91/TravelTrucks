import { createAsyncThunk } from '@reduxjs/toolkit';
import { campersAPI } from '../config/axiosConfig.js';

export const getCampers = createAsyncThunk(
  'campers/getCampers',
  async ({ params, page }, thunkApi) => {
    try {
      const { data } = await campersAPI.get(
        `/campers?${params}&limit=4&page=${page}`
      );
      console.log(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getCamperById = createAsyncThunk(
  'campers/getCamperById',
  async (id, thunkApi) => {
    try {
      const { data } = await campersAPI.get(`/campers/${id}`);
      console.log(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
