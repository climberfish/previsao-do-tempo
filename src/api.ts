import Axios, { AxiosResponse } from 'axios';

const axios = Axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
});

export default {
  getCityWeather: (cityName: string): Promise<AxiosResponse> => axios
    .get('/forecast/daily', {
      params: {
        q: cityName,
        appid: '<sua api key do openweather aqui>',
        units: 'metric',
      },
    }).then(({ data }) => data),
};
