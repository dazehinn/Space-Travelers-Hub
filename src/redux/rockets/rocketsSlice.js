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
  reducers: {
    reserveRocket: (state, action) => {
      const rockets = state.rocketArray.find((rocket) => rocket.id === action.payload);
      rockets.isReserved = true;
    },
    cancelRocket: (state, action) => {
      const rockets = state.rocketArray.find((rocket) => rocket.id === action.payload);
      rockets.isReserved = false;
    },
  },
  extraReducers: {
    [fetchRockets.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchRockets.fulfilled]: (state, action) => {
      const rocketArray = action.payload.map((rocket) => ({
        id: rocket.id,
        name: rocket.name,
        type: rocket.type,
        flickr_images: [...rocket.flickr_images],
        description: rocket.description,
        isReserved: false,
      }));
      // state.isLoading = false;
      // state.rocketArray = action.payload;
      return { ...state, isLoading: false, rocketArray };
    },
    [fetchRockets.rejected]: (state) => {
      state.isLoading = false;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(fetchRockets.pending, (state) => {
  //     state.isLoading = true;
  //   });
  //   builder.addCase(fetchRockets.fulfilled, (state, action) => {
  //     state.isLoading = false;
  //     state.rocketArray = action.payload;
  //   });
  //   builder.addCase(fetchRockets.rejected, (state) => {
  //     state.isLoading = false;
  //   });
  // },
});

export default rocketsSlice.reducer;
export const {
  reserveRocket,
  cancelRocket,
} = rocketsSlice.actions;
