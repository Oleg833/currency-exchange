import { createSlice } from '@reduxjs/toolkit';
import { fetchUserCurrency } from './operation';

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.baseCurrency = payload;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    baseCurrency: '',
    isLoading: false,
    error: null,
  },
  reducers: {
    addBaseCurrency(state, { payload }) {
      state.baseCurrency = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUserCurrency.pending, handlePending)
      .addCase(fetchUserCurrency.fulfilled, handleFulfilled)
      .addCase(fetchUserCurrency.rejected, handleRejected);
  },
});

export const { addBaseCurrency } = currencySlice.actions;
export const currencyReducer = currencySlice.reducer;
