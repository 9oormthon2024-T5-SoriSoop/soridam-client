import { createSlice } from '@reduxjs/toolkit';

interface TimeState {
  isFixed: boolean;
  fixedDate: Date | null;
}

const initialState: TimeState = {
  isFixed: false,
  fixedDate: null,
};

const dateTimeSlice = createSlice({
  name: 'time',
  initialState,
  reducers: {
    startMeasurement: (state) => {
      state.isFixed = true;
      state.fixedDate = new Date();
    },
    cancelMeasurement: (state) => {
      state.isFixed = false;
      state.fixedDate = null;
    },
    resetState: () => initialState,
  },
});

export const { startMeasurement, cancelMeasurement, resetState } = dateTimeSlice.actions;

export default dateTimeSlice.reducer;