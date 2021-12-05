import { SET_CITY, SET_WEATHER_REPORT, UPDATE_CITY, UPDATE_WEATHER_REPORT } from '../Types';
import AllCities from '../../../pk.json'
import { CityType } from '../../utills/types';
const intialState = {
  allCities: <[CityType]>AllCities,
  city: <CityType | null>null,
  weatherReport: <any>null
};
const reducer = (state = intialState, action: any) => {
  switch (action.type) {
    case SET_CITY: {
      return {
        ...state,
        city: action.payload,
      };
    }
    case UPDATE_CITY: {
      return {
        ...state,
        city: { ...state.city, ...action.payload },
      };
    }
    case SET_WEATHER_REPORT: {
      return {
        ...state,
        weatherReport: action.payload,
      };
    }
    case UPDATE_WEATHER_REPORT: {
      return {
        ...state,
        weatherReport: { ...state.weatherReport, ...action.payload },
      };
    }
    default:
      return state;
  }
};
export default reducer;
