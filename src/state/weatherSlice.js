import { createSlice } from "@reduxjs/toolkit";

export const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    weather: {},
  },
  reducers: {
    setWeather: (state, action) => {
      state.weather = action.payload;
    },
  },
});

export const { setWeather } = weatherSlice.actions;

export const selectWeather = (state) => state.weather.weather;

export const weatherReducer = weatherSlice.reducer;
