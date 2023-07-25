import { configureStore } from "@reduxjs/toolkit";
import { searchCityApi } from "./searchCityApi";
import { citiesSlice } from "./citiesSlice";
import { weatherApi } from "./weatherApi";
import { weatherSlice } from "./weatherSlice";

export const store = configureStore({
  reducer: {
    cities: citiesSlice.reducer,
    weather: weatherSlice.reducer,
    [searchCityApi.reducerPath]: searchCityApi.reducer,
    [weatherApi.reducerPath]: weatherApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(searchCityApi.middleware)
      .concat(weatherApi.middleware),
});
