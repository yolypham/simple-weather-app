import axios from 'axios';

const API_KEY = '3bfd6f5ca09314bd69fbf346f1acafe7';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;

    const request = axios.get(url);

    console.log(request);

    return {
        type: FETCH_WEATHER,
        payload: request
    }

}