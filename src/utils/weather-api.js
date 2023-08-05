import axios from 'axios';

const APIkey = '4c9a5ffbe0755c388b21ae83e7cbf3ad';

export const fetchWeatherAPI = async ( city ) => {
    const apiPath = `http://api.openweathermap.org/data/2.5/weather?q=${ city }&appid=${ APIkey }`

    try {
        const response = await axios.get( apiPath );
        return response.data;
    } catch ( error ) {
        console.error( error );
    }
}
