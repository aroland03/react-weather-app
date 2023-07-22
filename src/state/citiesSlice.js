import { createSlice } from "@reduxjs/toolkit";
import { Budapest } from "./budapestCity";

export const citiesSlice = createSlice({
    name: "cities",
    initialState: {
        selectedCity: Budapest,
        cities: [],
    },
    reducers: {
        setSelectedCity: (state, action) => {
            state.selectedCity = action.payload;
        },
        setCities: (state, action) => {
            state.cities = action.payload;
        }
    }
});

export const { setSelectedCity, setCities } = citiesSlice.actions;

export const selectSelectedCity = (state) => state.cities.selectedCity;
export const selectCities = (state) => state.cities.cities;

export const citiesReducer = citiesSlice.reducer;