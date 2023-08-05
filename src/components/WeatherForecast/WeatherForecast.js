import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchWeather } from "../../actions/fetchWeather";
import { getLoading, getWeather } from "../../selectors/selectors";

const WeatherForecast = () => {
    const weather = useSelector( getWeather );
    const isLoading = useSelector( getLoading );
    const dispatch = useDispatch();

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

