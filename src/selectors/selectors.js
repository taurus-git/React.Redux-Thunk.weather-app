import { createSelector } from "@reduxjs/toolkit";

const getWeatherState = state => state.weather;

export const getWeather = createSelector(
    getWeatherState,
    ( weatherState ) => weatherState.data
)

export const getLoading = createSelector(
    getWeatherState,
    ( weatherState ) => weatherState.isLoading
)
