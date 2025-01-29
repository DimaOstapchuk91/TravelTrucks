import { createAsyncThunk } from '@reduxjs/toolkit';
import { campersAPI } from '../config/axiosConfig.js';

export const getCampers = createAsyncThunk(
  'campers/getCampers',
  async (params, thunkApi) => {
    try {
      const { data } = await campersAPI.get(`/campers?${params}`);
      console.log(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
