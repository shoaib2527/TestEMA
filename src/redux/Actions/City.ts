import { showMessage } from 'react-native-flash-message';
import { ApiManager } from '../../backend/ApiManager';
import { CityType } from '../../utills/types';
import { SET_CITY, SET_WEATHER_REPORT, UPDATE_CITY, UPDATE_WEATHER_REPORT } from '../Types';
import dayjs from 'dayjs'
export const setCity = (payload: CityType) => {
  return (dispatch: any) => {
    dispatch(getCurrentWeather(payload))
    dispatch({
      type: SET_CITY,
      payload: payload,
    });
  }
};
export const updateCity = (payload: object) => {
  return {
    type: UPDATE_CITY,
    payload: payload,
  };
};
export const setWeatherReport = (payload: any) => {
  return {
    type: SET_WEATHER_REPORT,
    payload: payload,
  };
};
export const updateWeatherReport = (payload: any) => {
  return {
    type: UPDATE_WEATHER_REPORT,
    payload: payload,
  };
};
export const selectAllCities = state => state.City.allCities;
export const selectCity = state => state.City.city;
export const selectWeatherReport = state => state.City.weatherReport;

export const getWeatherData = (city: CityType) => {
  return async (dispatch: any) => {
    const resp = await ApiManager.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city.city},${city.iso2}&mode=json&appid=ee7013913097b1b918e9aa62c262b11a`)
    if (resp.ok) {
      let data = {}
      data.labels = resp.data.list.map(item => dayjs(item.dt_txt).format("MMM DD- hh A"));
      data.legend = ["Weather Forecast"]
      data.datasets = [{
        data: resp.data.list.map(item => item.main.temp),
        color: (opacity = 1) => `rgba(10, 10, 10, ${opacity})`,
        strokeWidth: 2
      }]
      dispatch(updateWeatherReport({ data }))
    }
    else showMessage({
      message: 'Error',
      description: 'Error while fetching Weather Data',
      type: 'danger'
    })
  }
}
export const getCurrentWeather = (city: CityType) => {
  return async (dispatch: any) => {
    const resp = await ApiManager.get(`http://api.openweathermap.org/data/2.5/weather?q=${city.city},${city.iso2}&APPID=ee7013913097b1b918e9aa62c262b11a`)
    if (resp.ok) {
      dispatch(setWeatherReport(resp.data.main))
      dispatch(getWeatherData(city))
    }
    else showMessage({
      message: 'Error',
      description: 'Error while fetching Weather Data',
      type: 'danger'
    })
  }
}
