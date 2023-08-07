import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { fetchWeatherAPI } from '../../utils/weather-api';

const sleep = ( ms ) => new Promise( ( resolve ) => setTimeout( resolve, ms ) );

export const fetchWeather = createAsyncThunk( 'weather/fetch', async ( city ) => {
    const response = await axios.get( fetchWeatherAPI( city ) );

    await sleep( 3000 );

    return response.data;
} );
