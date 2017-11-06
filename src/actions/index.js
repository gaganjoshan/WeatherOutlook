import axios from 'axios';
const API_KEY = "5b784a51950d76e74e16a4b4dc7a78f7";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function FetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request =  axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload:request
  }
}
