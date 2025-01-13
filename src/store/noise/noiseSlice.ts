import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NoiseState {
  maxDecibel: number;
  averageDecibel: number;
  latitude: number;
  longitude: number;
}

const initialState: NoiseState = {
  maxDecibel: 0,
  averageDecibel: 0,
  latitude: 37.5665,
  longitude: 126.9788,
};

const noiseSlice = createSlice({
  name: 'noise',
  initialState,
  reducers: {
    setNoiseData(state, action: PayloadAction<NoiseState>) {
      state.maxDecibel = action.payload.maxDecibel;
      state.averageDecibel = action.payload.averageDecibel;
      state.latitude = action.payload.latitude;
      state.longitude = action.payload.longitude;
    },
  },
});

export const { setNoiseData } = noiseSlice.actions;
export default noiseSlice.reducer;