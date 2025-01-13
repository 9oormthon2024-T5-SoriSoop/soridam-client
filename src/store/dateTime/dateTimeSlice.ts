import { createSlice } from '@reduxjs/toolkit';

interface TimeState {
  isRecording: boolean;
  fixedDate: Date;
}

const initialState: TimeState = {
  isRecording: false,
  fixedDate: new Date(),
};

const dateTimeSlice = createSlice({
  name: 'dateTime',
  initialState,
  reducers: {
    toggleRecording(state) {
      state.isRecording = !state.isRecording
    },

    setFixedDate: (state) => {
      state.fixedDate = new Date();
    },

    resetState: () => initialState,
  },
});

export const { toggleRecording, setFixedDate, resetState } = dateTimeSlice.actions;

export default dateTimeSlice.reducer;