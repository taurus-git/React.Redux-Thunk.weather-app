import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../../store/store";

const WeatherForecast = () => {
    const dispatch = useDispatch();
    const weather = useSelector( state => state.weather.data );
    const isLoading = useSelector( state => state.weather.isLoading );

    useEffect( () => {
        dispatch( fetchWeather( 'London' ) );
    }, [dispatch] );

    if ( weather ) {
        console.log( weather );
    }

    return (
        <div>
            { isLoading ? <div>Loading...</div> : <div>WeatherForecast</div> }
        </div>
    );
}

export default WeatherForecast;

