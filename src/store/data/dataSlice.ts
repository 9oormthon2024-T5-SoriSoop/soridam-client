import { createSlice } from "@reduxjs/toolkit";

interface dataState {
    locate: {
        x: number,
        y: number
    },
    decibel: {
        maxdB: number,
        averagedB: number,
        date: string,
    }
}

const initialState: dataState = {
    locate: {
        x: 0,
        y: 0,
    },
    decibel: {
        maxdB: 0,
        averagedB: 0,
        date: '',
    }
}

const dataSlice = createSlice({
    name: "decibelData",
    initialState,
    reducers: {
        setPosition: (state, action) => {
            state.locate = action.payload
        },
        setDecibel: (state, action) => {
            state.decibel = action.payload
        },
    }
})

export const {
    setPosition,
    setDecibel
} = dataSlice.actions;

export default dataSlice.reducer;