const APIkey = '4c9a5ffbe0755c388b21ae83e7cbf3ad';

export const fetchWeatherAPI = ( city ) => {
    return `http://api.openweathermap.org/data/2.5/weather?q=${ city }&appid=${ APIkey }`;
}
