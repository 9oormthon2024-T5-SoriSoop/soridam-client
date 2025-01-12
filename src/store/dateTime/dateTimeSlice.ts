import { createSlice } from '@reduxjs/toolkit';

interface TimeState {
  isRecording: boolean;
  fixedDate: Date | null;
}

const initialState: TimeState = {
  isRecording: false,
  fixedDate: null,
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