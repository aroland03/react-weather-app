import { configureStore } from "@reduxjs/toolkit";
import { searchCityApi } from "./searchCityApi";
import { citiesSlice } from "./citiesSlice";

export const store = configureStore({
    reducer: {
        cities: citiesSlice.reducer,
        [searchCityApi.reducerPath]: searchCityApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(searchCityApi.middleware),
})