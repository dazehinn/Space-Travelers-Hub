import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rockets/rocketsSlice';
import reducer from './missions/missionSlice';

const store = configureStore({
  reducer: {
    missions: reducer,
    rocket: rocketReducer,
  },
});

export default store;
