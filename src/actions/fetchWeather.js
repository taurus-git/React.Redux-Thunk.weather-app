import { fetchWeatherAPI } from '../utils/weather-api';
import { FETCH_WEATHER_REQUEST, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_FAILURE } from "./actionTypes";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchWeather = city => async dispatch => {
    dispatch( { type: FETCH_WEATHER_REQUEST } );

    try {
        await sleep(1000);
        const data = await fetchWeatherAPI( city );
        dispatch( { type: FETCH_WEATHER_SUCCESS, payload: data } );
    } catch ( error ) {
        dispatch( { type: FETCH_WEATHER_FAILURE, payload: error.message } );
    }
};
