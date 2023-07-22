import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { useSelector } from "react-redux";
import { selectSelectedCity } from "./citiesSlice";


export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/`,
  }),
  endpoints: (builder) => ({
    getWeather: builder.mutation({
      query: ({ lat, lon }) => ({
        url: `${lat},${lon}?`,
        params: {
          unitGroup: "metric",
          include: "current,alerts,hours,daily",
          key: "DUH4CC78TEVHCY9Q99SBM7NYL",
          contentType: "json",
          iconSet: "icons2",
        },
        method: "GET",
      }),
    }),
  }),
});

export const { useGetWeatherMutation } = weatherApi;
