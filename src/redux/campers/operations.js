import { createAsyncThunk } from '@reduxjs/toolkit';
import { campersAPI } from '../config/axiosConfig.js';
import { errToast, successfullyToast } from '../../utils/toast.js';

export const getCampers = createAsyncThunk(
  'campers/getCampers',
  async ({ params, page }, thunkApi) => {
    try {
      const { data } = await campersAPI.get(
        `/campers?${params}&limit=4&page=${page}`
      );

      if (params.toString().length > 0) {
        successfullyToast('Campers successfully found');
      }

      return data;
    } catch (error) {
      errToast("sorry, we don't have such a camper");
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getCamperById = createAsyncThunk(
  'campers/getCamperById',
  async (id, thunkApi) => {
    try {
      const { data } = await campersAPI.get(`/campers/${id}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
