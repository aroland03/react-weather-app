import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const searchCityApi = createApi({
  reducerPath: "searchCityApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.geoapify.com/v1/geocode/autocomplete",
  }),
  endpoints: (builder) => ({
    searchCity: builder.mutation({
      query: (city) => ({
        url: "?",
        params: {
          apiKey: "8b43daef9ae24254b41ca50ed6ae2663",
          text: city,
          type: "city",
          lang: "hu",
          bias: "countrycode:hu",
          limit: 5,
        },
        method: "GET",
      }),
    }),
  }),
});

export const { useSearchCityMutation } = searchCityApi;
