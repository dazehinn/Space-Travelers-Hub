import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  rocketArray: [],
  isLoading: false,
};

export const fetchRockets = createAsyncThunk('get/Rockets', async () => {
  const url = 'https://api.spacexdata.com/v4/rockets';
  const response = await fetch(url);
  return response.json();
});

export const rocketsSlice = createSlice({
  name: 'Rockets',
  initialState,
  extraReducers: {
    [fetchRockets.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchRockets.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.rocketArray = action.payload;
    },
    [fetchRockets.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default rocketsSlice.reducer;
