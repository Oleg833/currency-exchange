import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserInfo } from 'services/services';

export const fetchUserCurrency = createAsyncThunk(
  'auth/register',
  async (crd, thunkAPI) => {
    try {
      const userInfo = await getUserInfo(crd);
      return userInfo.results[0].annotations.currency.iso_code;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const apikey = 'Bqf0jgud3HsN3E435u3LbG7qgqDyjvOj';
